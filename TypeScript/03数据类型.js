// 1、数字类型
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
var infinityNumber1 = Infinity;
// 2、字符串类型
var myName = "Tom";
var myAge = 25;
var namex = null;
var name1 = undefined;
// 模板字符串
var sentence =
  "Hello, my name is " +
  myName +
  ".I'll be " +
  (myAge + 1) +
  " years old next month.";
// any
var anyThing = "Tom";
anyThing.setName("Jerry");
anyThing.setName("Jerry").sayHello();
anyThing.myName.setFirstName("Cat");
