import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home/Home.vue';
import User from './User/User.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/user',
        component: User
    }
];

const router = new VueRouter({
    routes
});

export default router;
