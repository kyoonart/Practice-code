// 栈类
function Stack() {
    // 栈中的属性
    var items = []

    // 栈相关的方法
    // 压栈操作
    this.push = function(element) {
        items.push(element)
    }

    // 出栈操作
    this.pop = function() {
        return items.pop()
    }

    // peek操作
    this.peek = function() {
        return items[items.length - 1]
    }

    // 判断栈中的元素是否为空
    this.isEmpty = function() {
        return items.length == 0
    }

    // 获取栈中元素的个数
    this.size = function() {
        return items.length
    }
}
// 封装十进制转二进制的函数
function dec2bin(decNumer) {
    // 定义变量
    var stack = new Stack()
    var remainder;

    // 循环除法
    while (decNumer > 0) {
        remainder = decNumer % 2
        decNumer = Math.floor(decNumer / 2)
        stack.push(remainder)
    }

    // 将数据取出
    var binayriStrng = ""
    while (!stack.isEmpty()) {
        binayriStrng += stack.pop()
    }
    return binayriStrng
}
console.log(typeof(dec2bin(3)));