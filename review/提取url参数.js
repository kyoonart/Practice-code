function serilizeUrl(url) {
    var result = {};
    url = url.split("?")[1];
    var map = url.split("&");
    for (var i = 0, len = map.length; i < len; i++) {
        result[map[i].split("=")[0]] = map[i].split("=")[1];
    }
    return result;
}
let url = 'http://item.taobao.com/item.htm?a=1&b=2&c=&d=xxx?e';
let result = serilizeUrl(url)
    // console.log(result);
