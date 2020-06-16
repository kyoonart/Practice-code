// 1、数字类型
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;
const infinityNumber1: number = Infinity;
// 2、字符串类型
let myName: string = "Tom";
let myAge: number = 25;
let namex: string = null;
let name1: string = undefined;
// 模板字符串
let sentence: string = `Hello, my name is ${myName}.I'll be ${
  myAge + 1
} years old next month.`;
// any
let anyThing: any = "Tom";
anyThing.setName("Jerry");
anyThing.setName("Jerry").sayHello();
anyThing.myName.setFirstName("Cat");
