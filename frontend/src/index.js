import Vue from 'vue';
import router from './router';
import App from './App.vue';
// import 'normalize.css';
import smoothscroll from 'smoothscroll-polyfill';

// kick off the polyfill!
smoothscroll.polyfill();

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});