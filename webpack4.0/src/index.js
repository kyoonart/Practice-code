import $ from 'jquery';
import './css/1.css'
import './css/2.less'
import app from './component/app.vue'
$(function() {
        $('li:odd').css('backgroundColor', 'blue')
        $('li:even').css('backgroundColor', 'yellow')
    })
    // document.body.appendChild(app)
class Person {
    static info = 'aaa'
}
console.log(Person.info);
import Vue from "vue"
const vm = new Vue({
    el: "#app",
    render: h => h(app)
})