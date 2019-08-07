import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './Home/Home.vue';
import ChatRoom from './ChatRoom/ChatRoom.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/chat-room',
        component: ChatRoom
    }
];

const router = new VueRouter({
    routes
});

export default router;
