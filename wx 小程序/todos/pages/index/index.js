Page({
    data: {
        // 文本框数据模型
        addText: '',
        // 任务清单
        todos: [{
            name: 'Leaning Webapp',
            completed: false
        }],
        leftCount: 1,
        allCompleted: true
    },
    inputChangeHandle: function(e) {
        this.setData({
            addText: e.detail.value
        })
    },
    addTodoHandle: function() {
        if (!this.data.addText) return
        if (this.data.leftCount === null) {
            this.data.leftCount = 0;
        }
        const todos = this.data.todos;
        todos.push({
            name: this.data.addText,
            completed: false
        });
        this.setData({
            todos: todos,
            addText: '',
            leftCount: this.data.leftCount + 1
        })
    },
    // 切换当前点中的item的完成状态
    toggleTodoHandle: function(e) {
        // 通过自定义属性的方式添加索引 拿到对应的值
        console.log(e.currentTarget.dataset.index);

        const item = this.data.todos[e.currentTarget.dataset.index]
        console.log(item);
        // console.log(e.currentTarget);
        // 取反状态
        item.completed = !item.completed
            // 修改leftcount的值  根据当前任务的完成状态决定加一还是减一
        const leftCount = this.data.leftCount + (item.completed ? -1 : 1);

        this.setData({
            todos: this.data.todos,
            leftCount: leftCount
        })
    },
    // 需要注意冒泡的问题
    removeTodoHandle: function(e) {
        // console.log('-----');
        // console.log(e.currentTarget.dataset)
        var todos = this.data.todos;
        // todos.splice(e.currentTarget.dataset.index, 1)
        const newtodos = todos.splice(e.currentTarget.dataset.index, 1)
        const item = newtodos[0]
        const leftCount = this.data.leftCount - (item.completed ? 0 : 1);

        this.setData({
            todos: todos,
            leftCount: leftCount
        })
    },
    toggleAll: function() {
        // 注意this的指向问题  this指向整个页面
        this.data.allCompleted = !this.data.allCompleted;
        const todos = this.data.todos
        todos.forEach(item => {
            item.completed = this.data.allCompleted
        });
        const leftCount = this.data.allCompleted ? 0 : leftCount;
        this.setData({
            leftCount: leftCount,
            todos: todos
        })
    },
    clearCompleted: function() {
        const todos = this.data.todos.filter(item => {
            return !item.completed
        })
        this.setData({
            todos: todos
        })
    },


})