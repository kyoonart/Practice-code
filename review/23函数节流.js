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