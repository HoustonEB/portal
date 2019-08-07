import Vue from 'vue';
import router from './router';
import App from './App.vue';
// import 'normalize.css';
import smoothscroll from 'smoothscroll-polyfill';
import 'animate.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import {demo} from 'package-demo-yu';
// demo();
// console.log(demo, 'dds')
// kick off the polyfill!
smoothscroll.polyfill();
Vue.use(ElementUI);

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});