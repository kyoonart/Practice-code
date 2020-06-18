var mySum = function (x, y) {
  return x + y;
};
mySum(1, 3);
var mySearch;
mySearch = function (source, subString) {
  return source.search(subString) !== -1;
};
var Sumx = function (x, y) {
  return x + y;
};
//剩余参数
function push(array) {
  var items = [];
  for (var _i = 1; _i < arguments.length; _i++) {
    items[_i - 1] = arguments[_i];
  }
  items.forEach(function (item) {
    array.push(item);
  });
  return array;
} 
push(a, 1, 2, 3);
