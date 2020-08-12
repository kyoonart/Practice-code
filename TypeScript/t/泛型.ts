// 泛型是根据输入的值来确定输出的值 而不是写死的 T名称是随意的  相当于是个占位符
function echo<T>(arg: T): T {
  return arg;
}
const result = echo(232);
function swap<T, U>(Tuple: [T, U]): [U, T] {
  return [Tuple[1], Tuple[0]];
}
let result2 = swap(["1211", 12121]);
interface TWithLength {
  length: number;
}
function echoWithLength<T extends TWithLength>(arg: T): T {
  console.log(arg.length);
  return arg;
}
const str = echoWithLength("str");
const str2 = echoWithLength([, 1, 2, 31]);
// 类型检查
interface KeyPair<T, U> {
  key: T;
  value: U;
}
let kp1: KeyPair<number, string> = { key: 123, value: "str" };
let kp2: KeyPair<string, number> = { key: "str", value: 123 };

interface IPlus<T> {
  (a: T, b: T): T;
}
function plus(a: number, b: number): number {
  return a + b;
}
const result3: IPlus<number> = plus;
