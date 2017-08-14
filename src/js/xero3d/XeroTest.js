/**
 * Created by polar on 2016/11/28.
 */

var age = 20;
function sayAge(){
    alert(this.age);
}
//sayAge();

//
//window.resizeTo(800,600);
//alert(window.innerHeight);
//var newWindow = window.open("http://www.baidu.com","","top:10.left:10,width:800,height:600,menubar:yes,toolbar:yes");
//newWindow.resizeTo(800,600);
//newWindow.moveTo(100,100);
////newWindow.close();
//window.print();

window.find();

var userName = prompt("What is you name?","XiaoMi");

if(confirm(userName + ",Are You Ok?")){
    alert("I'm Very Ok!");
}else{
    alert("I'm Not Ok!");
}


function main(){

    var vec = new Vector3D(0.2,2,1);
    var b = vec.add(new Vector3D(2,3,4));
    //alert(vec + " " + b.normalize());

}
