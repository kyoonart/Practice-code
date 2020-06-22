// window.addEventListener("load", function() {
var video = document.querySelector('.videosrc')
video.loop = false;
var target = document.querySelectorAll('#appera')
console.log(target.length);
window.onscroll = function() {
        // 获取鼠标滚轮滚动距离
        var _scrollTop = document.documentElement.scrollTop;
        console.log(_scrollTop);
        if (_scrollTop >= 800 && _scrollTop < 1300) {
            for (let i = 0; i < 7; i++) {
                target[i].style.animationName = 'appear';
                target[i].style.animationDuration = 1 + 's'
                target[i].style.animationTimingFunction = 'ease'
            }
        } else if (_scrollTop >= 1300 && _scrollTop < 1800) {
            for (let i = 7; i < 11; i++) {
                console.log(target[i]);
                target[i].style.animationName = 'appear';
                target[i].style.animationDuration = 1 + 's'
                target[i].style.animationTimingFunction = 'ease'
            }
        } else if (_scrollTop >= 1800 && _scrollTop < 2300) {
            for (let i = 11; i < 20; i++) {
                target[i].style.animationName = 'appear';
                target[i].style.animationDuration = 1 + 's'
                target[i].style.animationTimingFunction = 'ease'
            }
        }
    }
    // });