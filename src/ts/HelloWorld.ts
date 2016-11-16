/**
 * Created by polar on 2016/11/13.
 */
class Student {
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person : Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}


var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);


//===================基本数据类型===================
//布尔值
let myBoolVal:boolean = true;

//同JS,TypeScript所有数字都是浮点数
let floatLiteral:number = 3.14;
let decLiteral:number = 1;
let hexLiteral:number = 0xf00d;
let binaryLiteral:number = 0b10100;
let octalLiteral:number = 0o123;
console.log("float:" + floatLiteral + " dec:" + decLiteral + " hex:" + hexLiteral + " binary:" + binaryLiteral + " oct:" + octalLiteral);

//字符串类型,可以使用双引号（ "）或单引号（'）表示字符串
let str:string = "myString";
str = "otherString";
console.log("String Val:" + str);

//定义数组,Array<元素类型>泛型数组
let myList:number[] = [1,2,3];
let myList2:Array<number> = [1,2,3];

//元组,表示一个已知元素数量和类型的数组,各元素的类型不必相同
let myTuple:[string,number]; //声明一个元祖类型
myTuple = ["hello",10];//初始化元祖
console.log(myTuple[0]);

//枚举,默认情况下，从0开始为元素编号。 可以手动的指定成员的数值
enum Color{Black,White,Blue};
let myColor:Color = Color.Black;
console.log(myColor);

//任意值
let myVal:any = 123;
alert(myVal);

//void返回类型
function warnUser():void{
    alert("显示一个警告对话框");
}
warnUser();

//类型
let someVal :any = "this is a string"
let strLen:number = (<string>someVal).length;
console.log("string length:" + strLen + " " + (someVal as string).length);

//===================接口===================

//接口,这里并不能像在其它语言里一样，说传给createSquare的对象实现了这个接口。我们只会去关注值的外形。 只要传入的对象满足上面提到的必要条件，那么它就是被允许的。
//类型检查器也不会去检查属性的顺序，只要相应的属性存在并且类型也是对的就可以。
interface SquareConfig{
    color?:string;  //加"?"未可选参数
    width:number;
    height:number;
}
function createSquare(config:SquareConfig): {color:string,width:number,height:number}{
    let newSquareConfig = {color:"white",width:10,height:10};
    if(config.color){
        newSquareConfig.color = config.color;
    }
    newSquareConfig.width = config.width;
    newSquareConfig.height = config.height;

    return newSquareConfig;
}
let mySquare = createSquare({color:"Black",width:5,height:6});
console.log("My Square color:" + mySquare.color + " width:" + mySquare.width + " height:" + mySquare.height);

//接口定义函数类型
interface SearchFunc{
    (source:string,subString:string):boolean;
}
let mySearchFunc:SearchFunc;
mySearchFunc = function (source:string,subString:string):boolean {
    let result = source.search(subString);
    if(result == -1) return false;
    else return true;
}

//接口定义可索引类型
interface StringArray{
    [index:number]:string;
}
let myStrArr:StringArray;
myStrArr = ["Jack","Tom"];
console.log(myStrArr[0]);

interface StringPair{
    [key:string]:string;
}
let myMap:StringPair;
myMap = {"key1":"val1","key2":"val2"};
console.log(myMap["key2"]);

//类类型
interface ClockInterface{
    current:Date;
    setTime(d:Date);
}
class Clock implements ClockInterface{
    current:Date;
    constructor(h:number,m:number){
    }

    setTime(d:Date){
        this.current = d;
    }
}

class BaseClass{
    name:string;
    constructor(n:string){
        this.name = n;
    }
    sayHello(){
        console.log("This is " + this.name + ", Hello!");
    }
}
let c:BaseClass = new BaseClass("Jim");
c.sayHello();

let myAdd = function (x:number,y:number) {
    return x+y;
}