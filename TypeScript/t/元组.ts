type EventNames = "click" | "scroll" | "mousemove";
function handleEvent(ele: Element, y: EventNames) {
  console.log(ele, y);
}
handleEvent(document.getElementById("hello"), "scroll"); // 没问题
let tom: [string, number] = [];
tom[0] = "Tom";
tom[1] = 25;

let a: string = tom[0].slice(1);
let b: number = tom[1].toFixed(2);
console.log(a);
console.log(b);
// Tuple 元祖
