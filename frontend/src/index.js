import Vue from 'vue';
import router from './router';
import App from './App.vue';
import 'normalize.css';

const app = new Vue({
    el: '#app',
    router,
    render: h => h(App)
});