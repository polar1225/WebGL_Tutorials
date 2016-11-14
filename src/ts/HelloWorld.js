/**
 * Created by polar on 2016/11/13.
 */
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
})();
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = new Student("Jane", "M.", "User");
document.body.innerHTML = greeter(user);
//===================基本数据类型===================
//布尔值
var myBoolVal = true;
//同JS,TypeScript所有数字都是浮点数
var floatLiteral = 3.14;
var decLiteral = 1;
var hexLiteral = 0xf00d;
var binaryLiteral = 20;
var octalLiteral = 83;
console.log("float:" + floatLiteral + " dec:" + decLiteral + " hex:" + hexLiteral + " binary:" + binaryLiteral + " oct:" + octalLiteral);
//字符串类型,可以使用双引号（ "）或单引号（'）表示字符串
var str = "myString";
str = "otherString";
console.log("String Val:" + str);
//定义数组,Array<元素类型>泛型数组
var myList = [1, 2, 3];
var myList2 = [1, 2, 3];
//元组,表示一个已知元素数量和类型的数组,各元素的类型不必相同
var myTuple; //声明一个元祖类型
myTuple = ["hello", 10]; //初始化元祖
console.log(myTuple[0]);
//枚举,默认情况下，从0开始为元素编号。 可以手动的指定成员的数值
var Color;
(function (Color) {
    Color[Color["Black"] = 0] = "Black";
    Color[Color["White"] = 1] = "White";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var myColor = Color.Black;
console.log(myColor);
//任意值
var myVal = 123;
alert(myVal);
//void返回类型
function warnUser() {
    alert("显示一个警告对话框");
}
warnUser();
//类型
var someVal = "this is a string";
var strLen = someVal.length;
console.log("string length:" + strLen + " " + someVal.length);
function createSquare(config) {
    var newSquareConfig = { color: "white", width: 10, height: 10 };
    if (config.color) {
        newSquareConfig.color = config.color;
    }
    newSquareConfig.width = config.width;
    newSquareConfig.height = config.height;
    return newSquareConfig;
}
var mySquare = createSquare({ color: "Black", width: 5, height: 6 });
console.log("My Square color:" + mySquare.color + " width:" + mySquare.width + " height:" + mySquare.height);
var mySearchFunc;
mySearchFunc = function (source, subString) {
    var result = source.search(subString);
    if (result == -1)
        return false;
    else
        return true;
};
var myStrArr;
myStrArr = ["Jack", "Tom"];
console.log(myStrArr[0]);
var myMap;
myMap = { "key1": "val1", "key2": "val2" };
console.log(myMap["key2"]);
var Clock = (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.current = d;
    };
    return Clock;
})();
//# sourceMappingURL=HelloWorld.js.map