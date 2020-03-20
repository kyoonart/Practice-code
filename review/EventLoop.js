console.log('script start');
setTimeout(function() {
    console.log('setTimeout');
}, 0);
new Promise(resolve => {
        console.log('Promise')
        resolve()
    })
    .then(function() {
        console.log('promise1')
    })
Promise.resolve().then(function() {
    console.log('promise1');
}).then(function() {
    console.log('promise2');
});
console.log('script end');
// promise的then才属于微任务 promise中的属于同步任务