<template>
    <div id="app">
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <transition name="slide-fade" mode="out-in">
            <router-view></router-view>
        </transition>
        <!--<Footer v-show="showFooter"/>-->
    </div>
</template>

<script>
    // import Footer from "./components/Footer/index.vue";
    // export default {
    //     name: "app",
    //     data: function() {
    //         return {
    //             transitionName: "slide-left",
    //             constWindowHeight: "",
    //             resizeWindowHeight: "",
    //             showFooter: true
    //         };
    //     },
    //     components: {
    //         Footer
    //     },
    //     mounted: function() {
    //         this.constWindowHeight = document.documentElement.clientHeight;
    //         console.log("m", this.constWindowHeight);
    //         window.onresize = function() {
    //             if (this.constWindowHeight >= this.resizeWindowHeight) {
    //                 this.showFooter = false;
    //             } else {
    //                 this.showFooter = false;
    //             }
    //         };
    //         console.log(window.onresize)
    //     }
    // };
</script>
<style>

</style>
<!--<style>-->
    <!--* {-->
        <!--margin: 0;-->
        <!--padding: 0;-->
        <!--box-sizing: border-box;-->
    <!--}-->
    <!--html, body {-->
        <!--height: 100%;-->
        <!--overflow: hidden;-->
        <!--background-color: #fff;-->
        <!--font-family: "Helvetica Neue", Helvetica, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;-->
    <!--}-->
    <!--#app {-->
        <!--width: 100%;-->
        <!--height: 100%;-->
    <!--}-->
    <!--ul li {-->
        <!--list-style: none;-->
    <!--}-->
    <!--a {-->
        <!--text-decoration: none;-->
        <!--color: #34495e;-->
        <!-- -webkit-tap-highlight-color: rgba(0, 0, 0, 0);-->
    <!--}-->
    <!--/* 可以设置不同的进入和离开动画 */-->
    <!--/* 设置持续时间和动画函数 */-->
    <!--.slide-fade-enter-active {-->
        <!--transition: all 0.3s ease;-->
    <!--}-->
    <!--.slide-fade-leave-active {-->
        <!--transition: all 0.4s cubic-bezier(1, 0.5, 0.8, 1);-->
    <!--}-->
    <!--.slide-fade-enter, .slide-fade-leave-to-->
        <!--/* .slide-fade-leave-active for below version 2.1.8 */ {-->
        <!--transform: translateX(10px);-->
        <!--opacity: 0;-->
    <!--}-->
<!--</style>-->