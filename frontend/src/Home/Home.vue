<template>
    <div>
        <div class="blog-cover-wrapper">
            <div
                class="cover-bgc-box">
                <div
                    class="cover-info-box">
                    <p>Hello, my name is John Doe and I am</p>
                    <p>FULL STACK WEB DEVELOPER</p>
                    <p>creating modern and responsive Web Application</p>
                </div>
                <div
                    class="scroll-down"
                    @click="scrollDown">

                </div>
                <div class="pattern-box">

                </div>
            </div>
        </div>
        <div
            :class="{'blog-header-box': true}">
            <Header
                :data='headerData'
            ></Header>
        </div>
        <!--lsof -i:端口号 查询占用端口号8888的进程-->
        <!--kill PID 杀掉该进程-->
        <div class="content-wrapper">
            <InfoSectionPanel
                title="MY WORKS"
                content="No one lights a lamp in order to hide it behind the door: the purpose of light
            is to create more light, to open people’s eyes, to reveal the marvels around.">
                <template v-slot:contentCard>
                    <div class="content-section-box">
                        <div v-for="(item, index) in worksData"
                            class='content-section'
                            :class="'section-' + index">
                            <div class="content-icon-box">
                                <span
                                    class="iconfont"
                                    :class="item.icon"></span>
                            </div>
                            <div class="content-text-box">
                                <p class="text-title">{{item.title}}</p>
                                <p class="text-description">{{item.description}}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </InfoSectionPanel>
        </div>
    </div>
</template>
<script>
    import Header from '../components/Header/Header.vue';
    import InfoSectionPanel from '../components/InfoSectionPanel/InfoSectionPanel.vue';
    import ScrollReveal from 'scrollreveal';
    import {throttle} from 'loadsh';

    export default {
        data: function () {
            return {
                headerData: [
                    {
                        title: 'HOME'
                    },
                    {
                        title: 'SERVICES'
                    },
                    {
                        title: 'WORKS'
                    },
                    {
                        title: 'SKILLS'
                    },
                    {
                        title: 'CONTACT'
                    }
                ],
                worksData: [
                    {
                        title: 'WEB DESIGN',
                        description: `Good things come to those who wait,
                        but only the things left by those who hustle`,
                        icon: 'icon-codepen'
                    },
                    {
                        title: 'WEB PROGRAMMING',
                        description: `Good things come to those who wait,
                        but only the things left by those who hustle`,
                        icon: 'icon-sketch'
                    },
                    {
                        title: 'BRANDING',
                        description: `Good things come to those who wait,
                        but only the things left by those who hustle`,
                        icon: 'icon-bug'
                    },
                    {
                        title: 'CONSULTATION',
                        description: `Good things come to those who wait,
                        but only the things left by those who hustle`,
                        icon: 'icon-send'
                    }
                ]
            }
        },
        components: {
            Header,
            InfoSectionPanel
        },
        methods: {
            getDom: function (node) {
                let dom = '';
                if (node.indexOf('.') <= -1) {
                    dom = document.querySelectorAll(node);
                } else {
                    dom = document.querySelectorAll(node)[0];
                }
                return dom;
            },
            scrollView: throttle(function (e) {
                let header = this.getDom('.blog-header-wrapper');
                let body = document.documentElement || document.body;
                this.header = this.getDom('.blog-header-box');
                this.headerOffsetTop = this.header.offsetTop;
                if (body.scrollTop >= this.headerOffsetTop) {
                    header.style = 'position: fixed; top: 0px';
                    this.header.style = 'height: 50px;';
                } else {
                    header.style = '';
                    this.header.style = '';
                }
            }, 50),
            scrollDown: function (e) {
                this.header.scrollIntoView({behavior: 'smooth'})
                // window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
            }
        },
        mounted: function () {
            ScrollReveal().reveal(
                '.text-info-box',
                {
                    reset:true,
                    distance: '80px',
                    origin: 'bottom',
                    delay: 100
                }
                );
            ScrollReveal().reveal('.section-0', {reset:true, distance: '50px', origin: 'left'});
            ScrollReveal().reveal('.section-1', {reset:true, distance: '50px', origin: 'left'});
            ScrollReveal().reveal('.section-2', {reset:true, distance: '50px', origin: 'right'});
            ScrollReveal().reveal('.section-3', {reset:true, distance: '50px', origin: 'right'});
            window.addEventListener('scroll', this.scrollView);

        }
    }
</script>
<style type="text/less" lang="less">
    @import (reference) '~@frontend/global/style/global.less';
    @keyframes move-down {
        0% {

        }
        50% {
            opacity: 0.7;
        }
        100% {
            top: 25px;
            opacity: 0;
        }
    }

    .blog-cover-wrapper {
        width: 100%;
        height: 100vh;
        .cover-bgc-box {
            position: relative;
            height: 100%;
            background-attachment: fixed;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            background-image: url("./cover.jpg");
            .cover-info-box {
                width: 100%;
                position: absolute;
                top: 35%;
                transform: translateY(-50%);
                p {
                    width: 100%;
                    text-align: center;
                    color: #fff;
                    font-size: 16px;
                    font-weight: 300;
                    &:nth-child(2) {
                        font-size: 40px;
                        margin: 15px 0;
                        font-weight: 800;
                        letter-spacing: 5px;
                        text-transform: uppercase;
                    }
                }
            }
            .scroll-down {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                top: 80%;
                width: 50px;
                height: 50px;
                border: 2px solid #fff;
                border-radius: 50%;
                &:hover {
                    cursor: pointer;
                }
                &:before {
                    content: '';
                    position: absolute;
                    top: 10px;
                    left: 50%;
                    display: inline-block;
                    width: 10px;
                    height: 10px;
                    border: 2px solid transparent;
                    border-left-color: #fff;
                    border-top-color: #fff;
                    transform: translateX(-50%) rotate(-135deg);
                    animation: move-down 1.3s ease infinite;
                }
            }
            .pattern-box {
                height: 100%;
                background-image: url("./pattern.png");
                background-repeat: repeat;
            }
        }
    }

    .content-wrapper {
        height: 1000px;
        .content-section-box {
            margin-top: 50px;
            padding: 0 65px;
            display: flex;
            justify-content: space-between;
            /*flex-direction: column;*/
            .content-section {
                /*flex: 1;*/
                width: 265px;
                height: 258px;
                padding: 45px 20px 0;
                background-color: #fff;
                border-bottom: 1px solid #d4d4d4;
                text-align: center;
                .content-icon-box {
                    margin-bottom: 15px;
                    span {
                        font-size: 32px;
                    }
                }
                .content-text-box {
                    p {
                        color: @gray-22;
                        line-height: 25px;
                        margin-bottom: 15px;
                        font-weight: 800;
                        font-size: 14px;
                        &:nth-child(2) {
                            color: @gray-66;
                            font-weight: 300;
                        }
                    }
                }
            }
        }
    }

    .blog-header-box {

    }
</style>