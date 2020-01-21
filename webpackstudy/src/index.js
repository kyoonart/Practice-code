import $ from 'jquery';
import './css/1.css'
import './css/2.less'

$(function() {
    $('li:odd').css('backgroundColor', 'pink');
    $('li:even').css('backgroundColor', 'green')
})



import Vue from 'vue'
import App from './components/app.vue'
const vm = new Vue({
    el: '#app',
    render: h => h(App)

})