'use strict';
var promiseCount = 0;

function testPromise() {
    let thisPromiseCount = ++promiseCount;

    let log = document.getElementById('log');
    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') 开始 (<small>同步代码开始</small>)<br/>');

    // 新构建一个 Promise 实例：使用Promise实现每过一段时间给计数器加一的过程，每段时间间隔为1~3秒不等
    let p1 = new Promise(
        // resolver 函数在 Promise 成功或失败时都可能被调用
        (resolve, reject) => {
            log.insertAdjacentHTML('beforeend', thisPromiseCount +
                ') Promise 开始 (<small>异步代码开始</small>)<br/>');
            // 创建一个异步调用
            window.setTimeout(
                function() {
                    // 填充 Promise
                    resolve(thisPromiseCount);
                }, Math.random() * 2000 + 1000);
        }
    );

    // Promise 不论成功或失败都会调用 then
    // catch() 只有当 promise 失败时才会调用
    p1.then(
            // 记录填充值
            function(val) {
                log.insertAdjacentHTML('beforeend', val +
                    ') Promise 已填充完毕 (<small>异步代码结束</small>)<br/>');
            })
        .catch(
            // 记录失败原因
            (reason) => {
                console.log('处理失败的 promise (' + reason + ')');
            });

    log.insertAdjacentHTML('beforeend', thisPromiseCount +
        ') Promise made (<small>同步代码结束</small>)<br/>');
}