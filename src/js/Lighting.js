/**
 * Created by polar on 2016/11/7.
 */

var g_canvas = null;


var VTX_SHADER_SOURCE = null;
var FRG_SHADER_SOURCE = null;
var IMAGE_RESOURCE = null;


var g_previousTime = 0;
var g_deltaTime = 0;

var g_eyeX = 0;
var g_eyeY = 0;
var g_eyeZ = 8.5;
function main(){
    g_canvas = document.getElementById("webgl");
    if(!g_canvas){
        return;
    }

    var gl = getWebGLContext(g_canvas);
    if(!gl){
        console.log("Faild to get the rendering context for WebGL");
        return;
    }

    loadImage(gl);
}

function loadImage(gl){
    IMAGE_RESOURCE = new Image();

    IMAGE_RESOURCE.onload = function(){
        loadShaders(gl);
    }
    //开始加载图像
    IMAGE_RESOURCE.src = "resources/wood.jpg";
}

function loadShaders(gl){
    loadShaderFile(gl,"js/shaders/Lighting.vert",gl.VERTEX_SHADER);
    loadShaderFile(gl,"js/shaders/Lighting.frag",gl.FRAGMENT_SHADER);
}

function start(gl){

    if(!initShaders(gl,VTX_SHADER_SOURCE,FRG_SHADER_SOURCE)){
        console.log("Faild to initialize shaders.");
        return;
    }


    var n = initBuffers(gl);
    if(n < 0){
        console.log("Faild to set the buffer");
        return;
    }

    initSamplers(gl);

    //找不到返回null
    var u_MVPMatrix = gl.getUniformLocation(gl.program,"u_MVPMatrix");
    if(!u_MVPMatrix){
        console.log("Faild to get the storage location of Shader Uniform Param");
        return -1;
    }
    var u_ModelMatrix = gl.getUniformLocation(gl.program,"u_ModelMatrix");
    if(!u_ModelMatrix){
        console.log("Faild to get the storage location of Shader Uniform Param");
        return -1;
    }
    var u_NormalMatrix = gl.getUniformLocation(gl.program,"u_NormalMatrix");
    if(!u_NormalMatrix){
        console.log("Faild to get the storage location of Shader Uniform Param");
        return -1;
    }

    gl.clearColor(0.0,0.0,0.0,1.0);

    //世界变换
    var currentAngle = 0;
    var modelMatrix = new Matrix4();
    modelMatrix.setIdentity();

    //视图变换
    var viewMatrix = new Matrix4();
    viewMatrix.setIdentity();
    viewMatrix.setLookAt(g_eyeX,g_eyeY,g_eyeZ, 0,0,0,  0,1,0);

    //投影变换
    var projMatrix = new Matrix4();
    projMatrix.setPerspective(30,g_canvas.width/g_canvas.height,0.1,100);

    var mvpMatrix = new Matrix4();
    mvpMatrix.set(projMatrix).multiply(viewMatrix).multiply(modelMatrix);

    var normalMatrix = new Matrix4();
    normalMatrix.setInverseOf(modelMatrix);
    normalMatrix.transpose();


    //light setting
    var u_LightPos = gl.getUniformLocation(gl.program,"u_LightPos");
    gl.uniform3f(u_LightPos,3.0,3.0,3.0);

    var u_LightColor = gl.getUniformLocation(gl.program,"u_LightColor");
    gl.uniform4f(u_LightColor,1,1,1,1.0);

    var u_SpecColor = gl.getUniformLocation(gl.program,"u_SpecColor");
    gl.uniform4f(u_SpecColor,1.0,0.4,0.4,1.0);

    var u_EyePos = gl.getUniformLocation(gl.program,"u_EyePos");
    gl.uniform3f(u_EyePos,g_eyeX,g_eyeY,g_eyeZ);

    var u_Specular = gl.getUniformLocation(gl.program,"u_Specular");
    gl.uniform1f(u_Specular,0.5);

    var u_Gloss = gl.getUniformLocation(gl.program,"u_Gloss");
    gl.uniform1f(u_Gloss,1.2);

    //定义按键相应
    document.onkeydown = function (ev) {
        keydown(ev,viewMatrix);
    }
    var tick = function () {
        updateTimer();
        updateLightPos(gl,u_LightPos);
        mvpMatrix.set(projMatrix).multiply(viewMatrix).multiply(modelMatrix);
        draw(gl,n,mvpMatrix,u_MVPMatrix,modelMatrix,u_ModelMatrix,normalMatrix,u_NormalMatrix);
        requestAnimationFrame(tick);
    }
    tick();
}

function updateLightPos(gl,u_LightPos){
    gl.uniform3f(u_LightPos,3 * Math.cos(g_previousTime * Math.PI / 1000.0),3,3 * Math.sin(g_previousTime * Math.PI / 1000.0));
}

function keydown(ev,viewMatrix){
    if (ev.keyCode == 39){  //right
        g_eyeX += 0.1;
    }else if(ev.keyCode == 37){//left
        g_eyeX -= 0.1;
    }else if(ev.keyCode == 38){ //up
        g_eyeZ += 0.1;
    }else if(ev.keyCode == 40){ //down
        g_eyeZ -= 0.1;
    }
    viewMatrix.setLookAt(g_eyeX,g_eyeY,g_eyeZ, 0,0,0,  0,1,0);
}
function loadShaderFile(gl,fileName,shader){
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState === 4 && request.status != 404){
            onLoadShader(gl,request.responseText,shader);
        }
    }
    request.open("GET",fileName,true);
    request.send();
}

function onLoadShader(gl,fileString,type){
    if(type == gl.VERTEX_SHADER){
        VTX_SHADER_SOURCE = fileString;
    }else if(type == gl.FRAGMENT_SHADER){
        FRG_SHADER_SOURCE = fileString;
    }

    if(VTX_SHADER_SOURCE && FRG_SHADER_SOURCE) start(gl);
}


//设置顶点缓冲区和索引缓冲区
function initBuffers(gl){
    var radius = 1;
    var segment = 24;
    var sx = segment;       //经向细分
    var sy = segment + 1;   //纬向细分
    var sizePerVertex = 8;

    //设置顶点缓冲区
    var vertices = new Float32Array( sizePerVertex * (sx + 1) * (sy + 1));
    var i = 0;
    var v = 0.0;
    var u = 0.0;
    while (v <= sy){
        u = 0;
        while ( u <= sx){
            var y = - Math.cos( v / sy * Math.PI) * radius;
            var x = Math.cos(u / sx * Math.PI * 2) * (Math.sin(v / sy * Math.PI) * radius);
            var z = -Math.sin(u / sx * Math.PI * 2) * (Math.sin(v / sy * Math.PI) * radius);

            var mag = Math.sqrt(x * x + y * y + z * z);
            vertices[i++] = x;
            vertices[i++] = y;
            vertices[i++] = z;

            vertices[i++] = x / mag;
            vertices[i++] = y / mag;
            vertices[i++] = z / mag;

            vertices[i++] = 1 - u / segment;
            vertices[i++] = 1 - v / segment;
            ++u;
        }
        ++v;
    }


    //<创建>缓冲区对象,创建失败返回null
    var vertexBuffer = gl.createBuffer();
    if(!vertexBuffer){
        console.log("Faild to create the buffer object.")
        return -1;
    }

    //<绑定>缓冲区对象
    gl.bindBuffer(gl.ARRAY_BUFFER,vertexBuffer);
    //<写数据>到缓冲区对象
    gl.bufferData(gl.ARRAY_BUFFER,vertices,gl.STATIC_DRAW);


    var FSIZE = vertices.BYTES_PER_ELEMENT;
    //向webgl请求相应attribute变量存储地址
    var a_Position = gl.getAttribLocation(gl.program,"a_Position");
    if(a_Position < 0){   //-1表示指定的变量不存在
        console.log("Faild to get the storage location of Shader Attribute:a_Position ");
        return -1;
    }
    //将缓冲器对象分配给a_Position
    //将缓冲区对象<分配>给一个attrubite变量
    gl.vertexAttribPointer(a_Position,3,gl.FLOAT,false,FSIZE * sizePerVertex,0);
    //<开启>attrubite
    gl.enableVertexAttribArray(a_Position);


    var a_Normal = gl.getAttribLocation(gl.program,"a_Normal");
    if(a_Normal < 0){   //-1表示指定的变量不存在
        console.log("Faild to get the storage location of Shader Attribute:a_Normal");
        return -1;
    }
    gl.vertexAttribPointer(a_Normal,3,gl.FLOAT,false,FSIZE * sizePerVertex,FSIZE * 3);
    gl.enableVertexAttribArray(a_Normal);

    var a_Texcoord = gl.getAttribLocation(gl.program,"a_Texcoord");
    if(a_Texcoord < 0){
        console.log("Faild to get the storage location of Shader Attribute:a_Texcoord");
        return -1;
    }
    gl.vertexAttribPointer(a_Texcoord,2,gl.FLOAT,false,FSIZE * sizePerVertex,FSIZE * 6);
    gl.enableVertexAttribArray(a_Texcoord);


    //设置索引缓冲区
     i =0;
    var indices = new Uint16Array(sx * sy * 6);
    v = 0;
    u = 0;
    while (v < sy)
    {
        u = 0;
        while (u < sx)
        {
            indices[i++] = (u + (v * (sx + 1)));
            indices[i++] = ((u + 1) + (v * (sx + 1)));
            indices[i++] = (u + ((v + 1) * (sx + 1)));
            indices[i++] = ((u + 1) + (v * (sx + 1)));
            indices[i++] = ((u + 1) + ((v + 1) * (sx + 1)));
            indices[i++] = (u + ((v + 1) * (sx + 1)));
            u++;
        }
        v++;
    }

    var indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,indices,gl.STATIC_DRAW);


    return indices.length;
}

function initSamplers(gl){
    //对纹理图像进行y轴翻转
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,1);
    //gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL,1);
    var texture = gl.createTexture();

    var u_Sampler = gl.getUniformLocation(gl.program,"u_Sampler");
    //激活0号纹理
    gl.activeTexture(gl.TEXTURE0);
    //绑定纹理
    gl.bindTexture(gl.TEXTURE_2D,texture);
    //设置纹理参数
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);
    //设置纹理资源
    gl.texImage2D(gl.TEXTURE_2D,0,gl.RGB,gl.RGB,gl.UNSIGNED_BYTE,IMAGE_RESOURCE);
    //分配到着色器
    gl.uniform1i(u_Sampler,0);
}

function updateTimer(){
    var time = Date.now();
    if(g_previousTime == 0){
        g_deltaTime = 0;
    }else{
        g_deltaTime = time - g_previousTime;
    }
    g_previousTime = time;
}


function draw(gl,n,mvp,u_MVPMatrix,modelMatrix,u_ModelMatrix,normalMatrix,u_NormalMatrix){
    gl.enable(gl.DEPTH_TEST);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    //设置变换矩阵
    gl.uniformMatrix4fv(u_MVPMatrix,false,mvp.elements);
    gl.uniformMatrix4fv(u_ModelMatrix,false,modelMatrix.elements);
    gl.uniformMatrix4fv(u_NormalMatrix,false,normalMatrix.elements);

    //数值类型为UNSIGNED_BYTE,对应index数据类型为Uint8Array,而gl.UNSIGNED_SHORT=>Uint16Array
    gl.drawElements(gl.TRIANGLES,n,gl.UNSIGNED_SHORT,0);

}


