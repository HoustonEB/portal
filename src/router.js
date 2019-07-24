import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home/home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    }
];
console.log(VueRouter, '23')
const router = new VueRouter({
    routes
});

export default router;
