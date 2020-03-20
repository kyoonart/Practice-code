// var a = 0
// var b = async() => {
//     a = a + await 10
//     console.log('2', a) // -> '2' 10
//     a = (await 10) + a
//     console.log('3', a) // -> '3' 20
// }
// b()
// a++
// console.log('1', a) // -> '1' 1
// 跨域请求
function jsonp(url, jsponCallback, success) {
    let script = document.createElement('script')
    script.url = url;
    script.type = "text/javascript";
    window[jsponCallback] = function(data) {
        success && success()
    };
    document.body.appendChild(script)
}