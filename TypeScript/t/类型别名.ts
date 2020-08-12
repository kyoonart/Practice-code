type PlusType = (x: number, y: number) => number;
function plus(a: number, b: number): number {
  return a + b;
}
const sum: PlusType = plus;
type NameResolver = () => string;
type NameOrResolver = string | NameResolver;
function getName(n: NameOrResolver) {
  if (typeof n === "string") {
    return n;
  } else {
    return n();
  }
}

// 类型断言
function getLength(input: string | number): number {
  const str = input as String; // 把str看成string
  // if (str.length) {
  //   return str.length;
  // } else {
  //   const num = input as number;
  //   return num.toString().length;
  // }
  // 断言写法
  if ((<string>input).length) {
    return (<string>input).length;
  } else {
    return input.toString().length;
  }
}
