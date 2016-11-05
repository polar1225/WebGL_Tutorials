/**
 * Created by polar on 2016/11/5.
 */

var VTX_SHADER_SOURCE = null;
var FRG_SHADER_SOURCE = null;

var g_previousTime = 0;
var g_deltaTime = 0;

function main(){
    var canvas = document.getElementById("webgl");
    if(!canvas){
        return;
    }

    var gl = getWebGLContext(canvas);
    if(!gl){
        console.log("Faild to get the rendering context for WebGL");
        return;
    }

    loadShaderFile(gl,"js/shaders/TransformTriangle.vert",gl.VERTEX_SHADER);
    loadShaderFile(gl,"js/shaders/Triangle.frag",gl.FRAGMENT_SHADER);

}

function start(gl){

    if(!initShaders(gl,VTX_SHADER_SOURCE,FRG_SHADER_SOURCE)){
        console.log("Faild to initialize shaders.");
        return;
    }


    var n = initVertexBuffers(gl);
    if(n < 0){
        console.log("Faild to set the vertex buffer");
        return;
    }

    var u_ModelMatrix = gl.getUniformLocation(gl.program,"u_ModelMatrix");
    if(u_ModelMatrix < 0){
        console.log("Faild to get the storage location of Shader Attribute");
        return -1;
    }

    gl.clearColor(0.0,0.0,0.0,1.0);

    var currentAngle = 0;
    var modelMatrix = new Matrix4();
    modelMatrix.setIdentity();

    var tick = function () {
        updateTimer();
        currentAngle = updateRotation(currentAngle,modelMatrix);
        draw(gl,n,modelMatrix,u_ModelMatrix);
        requestAnimationFrame(tick);
    }
    tick();
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


//设置顶点缓冲区
function initVertexBuffers(gl){
    var vertices = new Float32Array(
        [   0.0,    0.5,     1.0,0.0,0.0,1.0,
            -0.5,   -0.5,    0.0,1.0,0.0,1.0,
            0.5,    -0.5,    0.0,0.0,1.0,1.0]
    );

    var n = 3;  // 点的个数

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
        console.log("Faild to get the storage location of Shader Attribute");
        return -1;
    }
    //将缓冲器对象分配给a_Position
    //将缓冲区对象<分配>给一个attrubite变量
    gl.vertexAttribPointer(a_Position,2,gl.FLOAT,false,FSIZE * 6,0);
    //<开启>attrubite
    gl.enableVertexAttribArray(a_Position);


    var a_Color = gl.getAttribLocation(gl.program,"a_Color");
    if(a_Position < 0){   //-1表示指定的变量不存在
        console.log("Faild to get the storage location of Shader Attribute");
        return -1;
    }
    gl.vertexAttribPointer(a_Color,4,gl.FLOAT,true,FSIZE * 6,FSIZE * 2);
    gl.enableVertexAttribArray(a_Color);


    return n;
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

function updateRotation(angle,modelMatrix){
    var rotateSpeed = 1 / 3.0;
    var currentAngle = angle + g_deltaTime * rotateSpeed;
    modelMatrix.setRotate(currentAngle,0,0,1);
    return currentAngle;
}

function draw(gl,n,modelMatrix,u_ModelMatrix){
    gl.clear(gl.COLOR_BUFFER_BIT);

    //设置变换矩阵
    gl.uniformMatrix4fv(u_ModelMatrix,false,modelMatrix.elements);

    gl.drawArrays(gl.TRIANGLES,0,n);
}


