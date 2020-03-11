// var name = 'ConardLi';
// var name2 = name;
// name2 = 'code秘密花园';
// console.log(name); // ConardLi;
// console.log(name2);
// let obj = { name: 'ConardLi' };

// function changeValue(obj) {
//     obj.name = 'code秘密花园';
// }
// changeValue(obj);
// console.log(obj.name); // code秘密花
let obj = {};

function changeValue(obj) {
    obj.name = 'ConardLi';
    var a = { name: 'code秘密花园' };
    obj = a;
    console.log(obj);

}
changeValue(obj);
console.log(obj.name); // ConardLi
console.log(obj);