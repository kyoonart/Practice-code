// 节流
var processor = {
    timeOutId: null,
    // 实际运行函数
    performProcessing: function() {
        let i = 300;
        while (i > 0) {
            console.log(i);
            i--;
        }
    },
    // 初始处理调用的方法
    process: function() {
        clearTimeout(this.timeOutId);
        var that = this;
        this.timeOutId = setTimeout(function() {
            that.performProcessing()
        }, 2000)
    }
}
processor.process()
// 防抖动
_.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    var later = function() {
      // 现在和上一次时间戳比较
      var last = _.now() - timestamp;
      // 如果当前间隔时间少于设定时间且大于0就重新设置定时器
      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        // 否则的话就是时间到了执行回调函数
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };
    return function() {
      context = this;
      args = arguments;
      // 获得时间戳
      timestamp = _.now();
      // 如果定时器不存在且立即执行函数
      var callNow = immediate && !timeout;
      // 如果定时器不存在就创建一个
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        // 如果需要立即执行函数的话 通过 apply 执行
        result = func.apply(context, args);
        context = args = null;
      }
      return result;
    };
  };