function create() {
    // 创建一个空的对象
    let obj = new Object()
        // 获得构造函数
    let Con = [].shift.call(arguments)
        // console.log(Con);
        // 链接到原型
    obj.__proto__ = Con.prototype
        // 绑定 this，执行构造函数
    let result = Con.apply(obj, arguments)
        // 确保 new 出来的是个对象
    return typeof result === 'object' ? result : obj
}

function _new() {
    // 创建一个新对象
    let newObj = {};
    // 获取构造函数
    let Constructor = Array.prototype.shift.call(arguments);
    // 连接新对象原型，新对象可以访问原型中的属性
    newObj.__proto__ = Constructor.prototype;
    // 执行构造函数，即绑定 this，并且为这个新对象添加属性
    Constructor.apply(newObj, arguments);
    // 返回该对象
    return newObj;
};