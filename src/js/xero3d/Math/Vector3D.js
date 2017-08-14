/**
 * Created by polar on 2016/11/28.
 */
function Vector3D(x,y,z){
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
}

Vector3D.prototype = {
    constructor:Vector3D,

    toString:function(){
        return "Vector3D(" + this.x + "," + this.y + "," + this.z + ")";
    },

    clone: function () {
        return new this.constructor(this.x,this.y,this.z);
    },

    copyFrom:function(sourceVector3D){
        this.x =  sourceVector3D.x;
        this.y =  sourceVector3D.y;
        this.z =  sourceVector3D.z;
    },

    copyTo: function (a) {
        a.x = this.x;
        a.y = this.y;
        a.z = this.z;
    },

    setTo:function (x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;

        return this;
    },

    scaleBy:function(s){
        this.x *= s;
        this.y *= s;
        this.z *= s;

        return this;
    },

    addWith:function(a){
        this.x += a.x;
        this.y += a.y;
        this.z += a.z;

        return this;
    },

    add:function(a){
        return new this.constructor(this.x + a.x,this.y + a.y,this.z + a.z);
    },

    subtractWith: function (a) {
        this.x -= a.x;
        this.y -= a.y;
        this.z -= a.z;

        return this;
    },

    subtract:function(a){
        return new this.constructor(this.x - a.x,this.y - a.y,this.z - a.z);
    },

    length:function(){
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    },

    setLength : function(length){
        return this.scaleBy(length / this.length());
    },

    lengthSquared: function () {
        return (this.x * this.x,this.y * this.y,this.z * this.z);
    },

    crossProduct:function(a,b){
        var ax = a.x, ay = a.y, az = a.z;
        var bx = b.x, by = b.y, bz = b.z;

        this.x = ay * bz - az * by;
        this.y = az * bx - ax * bz;
        this.z = ax * by - ay * bx;
        return this;
    },
    
    dotProduct: function (a) {
        return this.x * a.x + this.y * a.y + this.z * a.z;
    },

    normalize:function(){
        return this.scaleBy(1 / this.length());
    }

};