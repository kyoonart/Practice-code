// 可选参数一定需要加在确定参数后面
// 函数声明式写法
function add(x: number, y: number): number {
  return x + y;
}
// 这是函数表达式类型的写法
let mySum: (x: number, y?: number) => number = function (
  x: number,
  y?: number
): number {
  return x + y;
};
mySum(1, 3);
// 用接口定义函数的形状
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
};
const Sumx: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};
//剩余参数
function push(array: any[], ...items: any[]) {
  items.forEach(function (item) {
    array.push(item);
  });
  return array;
}
