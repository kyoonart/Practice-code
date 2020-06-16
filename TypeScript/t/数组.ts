let arr: number[] = [1, 2, 3, 2, 1, , 5, 6, 2, 1, 2];
//泛型
let arr2: Array<number> = [1, 2, 5, 55, 5];
// 接口表示数组较麻烦
interface Array1 {
  [index: number]: number;
}
let arr3: Array1 = [1, 2, 3, 5, 4, 6];

function sum() {
  let args: IArguments = arguments;
}
let arr4: any[] = [1, "2", true];
