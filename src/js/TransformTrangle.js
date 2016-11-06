/**
 * Created by polar on 2016/11/4.
 */

var VTX_SHADER_SOURCE = null;
var FRG_SHADER_SOURCE = null;
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

    //清空缓冲区
    gl.clearColor(0.0,0.0,0.0,1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    //绘图,参数2表示从哪个顶点开始绘制
    gl.drawArrays(gl.TRIANGLES,0,n);
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



    //=================== 设置uniform变量值=======================
    //设置矩阵
    var u_ModelMatrix = gl.getUniformLocation(gl.program,"u_ModelMatrix");
    if(!u_ModelMatrix){
        console.log("Faild to get the storage location of Shader Uniform Param");
        return -1;
    }

    //var transX = 0.2;
    //var transY = 0.2;
    //var transZ = 0;
    ////WebGL为列主序
    //var xformMatrix = new Float32Array(
    //    [
    //        1,  0,  0,  0,
    //        0,  1,  0,  0,
    //        0,  0,  1,  0,
    //        transX,transY,  transZ,  1
    //    ]);
    //gl.uniformMatrix4fv(u_ModelMatrix,false,xformMatrix);

    var xformMatrix = new Matrix4();
    xformMatrix.setRotate(20,0,0,1);
    xformMatrix.translate(0.2,0.2,0);
    gl.uniformMatrix4fv(u_ModelMatrix,false,xformMatrix.elements);

    return n;
}


