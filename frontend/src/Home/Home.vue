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
                class="what-i-do-panel"
                title="THIS IS WHAT I DO"
                content="No one lights a lamp in order to hide it behind the door: the purpose of light
            is to create more light, to open people’s eyes, to reveal the marvels around.">
                <template v-slot:contentCard>
                    <div class="content-section-box">
                        <div v-for="(item, index) in doneThingData"
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
            <InfoSectionPanel
                class="works-panel"
                title="MY WORKS"
                content="No one lights a lamp in order to hide it behind the door: the purpose of light
            is to create more light, to open people’s eyes, to reveal the marvels around.">
                <template v-slot:contentCard>
                    <div class="content-section-box">
                        <div v-for="(item, index) in worksData"
                             class='content-section'
                             :class="'section-' + index">
                            <!--<div class="content-icon-box">-->
                            <!--<span-->
                            <!--class="iconfont"-->
                            <!--:class="item.icon"></span>-->
                            <!--</div>-->
                            <div class="content-text-box">
                                <p class="text-title">{{item.title}}</p>
                                <p class="text-description">{{item.description}}</p>
                            </div>
                        </div>
                    </div>
                </template>
            </InfoSectionPanel>
            <InfoSectionPanel
                class="my-skills-panel"
                title="MY SKILLS"
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
        <div class="hire-me-box">
            <div class="hire-me-info">
                <p class="hire-title">ARE YOU READY TO START?</p>
                <p class="hire-description">I'm available for freelance projects.</p>
                <p class="hire-btn">Hire Me</p>
            </div>
        </div>
        <div class="content-wrapper">
            <InfoSectionPanel
                class="what-i-do-panel"
                title="THIS IS WHAT I DO"
                content="No one lights a lamp in order to hide it behind the door: the purpose of light
            is to create more light, to open people’s eyes, to reveal the marvels around.">
                <template v-slot:contentCard>
                    <div class="content-section-box">
                        <div v-for="(item, index) in doneThingData"
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
        <div class="footer-box">
            <div class="footer-info">
                <ul class="footer-link clearfix">
                    <li v-for="item in footerLink">
                        <a
                            target="_blank"
                            :class="'fa ' + item.icon"
                            :href="item.link">
                        </a>
                    </li>
                </ul>
                <p class="footer-made-by-place">Made with <img class="heart" src="./heart-fill.svg"></img> in Yu Zhuang
                </p>
                <p class="footer-made-by-who">© 2019 YU ZHUANG</p>
            </div>
        </div>
        <div
            class="scroll-up"
            @click="scrollUp">
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
                footerLink: [
                    {
                        link: 'https://www.google.com.tw/',
                        icon: 'fa-google'
                    },
                    {
                        link: 'http://www.baidu.com',
                        icon: 'fa-paw'
                    },
                    {
                        link: 'https://www.facebook.com/',
                        icon: 'fa-facebook-square'
                    },
                    {
                        link: 'https://github.com/',
                        icon: 'fa-github'
                    },
                    {
                        link: 'https://twitter.com/',
                        icon: 'fa-twitter'
                    }
                ],
                doneThingData: [
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
            scrollView: function (e) {
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
                if (body.scrollTop === 0) {
                    this.getDom('.scroll-up').style = 'transform: scale(0)';
                } else {
                    this.getDom('.scroll-up').style = 'transform: scale(1)';
                }
            },
            scrollDown: function (e) {
                this.header = this.getDom('.blog-header-box');
                this.header.scrollIntoView({behavior: 'smooth'});
            },
            scrollUp: function () {
                window.scroll({top: 0, left: 0, behavior: 'smooth'});
            }
        },
        mounted: function () {
            let hireAnimation = {
                reset: true,
                distance: '150px',
                origin: 'right'
            };
            let sectionMoveLeft = {
                reset: true,
                distance: '50px',
                origin: 'left'
            };
            let sectionMoveRight = {
                reset: true,
                distance: '50px',
                origin: 'right'
            };
            ScrollReveal().reveal(
                '.text-info-box',
                {
                    reset: true,
                    distance: '80px',
                    origin: 'bottom',
                    delay: 100
                }
            );
            ScrollReveal().reveal('.section-0', sectionMoveLeft);
            ScrollReveal().reveal('.section-1', sectionMoveLeft);
            ScrollReveal().reveal('.section-2', sectionMoveRight);
            ScrollReveal().reveal('.section-3', sectionMoveRight);
            ScrollReveal().reveal('.hire-title', Object.assign(hireAnimation, {duration: 800}));
            ScrollReveal().reveal('.hire-description', Object.assign(hireAnimation, {duration: 1000}));
            ScrollReveal().reveal('.hire-btn', Object.assign(hireAnimation, {duration: 1200}));
            window.addEventListener('scroll', this.scrollView);
            const heart = document.querySelector('.heart');
            heart.classList.add('animated', 'heartBeat', 'infinite')

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
        .what-i-do-panel {
            background-color: #f5f5f5;
        }
        .works-panel {
            background-color: #fff;
            .content-section-box {
                flex-wrap: wrap;
                .content-section {
                    padding-top: 37px;
                    border: 0px solid #000;
                    width: 360px;
                    height: 225px;
                    margin-bottom: 30px;
                    cursor: pointer;
                    transition: all .5s;
                    .content-text-box {
                        position: relative;
                        height: 150px;
                        .common-pseudo-style {
                            content: '';
                            position: absolute;
                            display: block;
                            opacity: 0;
                            top: 0;
                            left: 0;
                            right: 0;
                            bottom: 0;
                            transition: all .5s;
                        }
                        &:before {
                            .common-pseudo-style;
                            transform: scale(0, 1);
                            border-top: 1px solid #fff;
                            border-bottom: 1px solid #fff;
                        }
                        &:after {
                            .common-pseudo-style;
                            transform: scale(1, 0);
                            border-left: 1px solid #fff;
                            border-right: 1px solid #fff;
                        }
                        .text-title {
                            font-size: 20px;
                            color: #fff;
                            letter-spacing: 3px;
                            position: relative;
                            top: 0;
                            transition: all .5s;
                        }
                        .text-description {
                            color: #fff;
                            position: relative;
                            opacity: 0;
                            top: 30px;
                            transition: all .5s;
                        }
                    }
                    &:hover {
                        .content-text-box {
                            &:before {
                                opacity: 1;
                                transform: scale(1, 1);
                            }
                            &:after {
                                opacity: 1;
                                transform: scale(1, 1);
                            }
                            .text-title {
                                top: 20px;
                            }
                        }
                        .text-description {
                            opacity: 1;
                            top: 20px;
                        }
                        background-color: rgba(95, 63, 41, .3);
                    }
                }
                .section-0 {
                    background-image: url("./item-3.jpg");
                    background-size: cover;
                }
                .section-1 {
                    background-image: url("./item-3.jpg");
                    background-size: cover;
                }
                .section-2 {
                    background-image: url("./item-3.jpg");
                    background-size: cover;
                }
                .section-3 {
                    background-image: url("./item-3.jpg");
                    background-size: cover;
                }
            }
        }
        .my-skills-panel {
            background-color: #f5f5f5;
        }
    }

    .blog-header-box {

    }

    .hire-me-box {
        height: 262px;
        background-image: url("./item-3.jpg");
        display: flex;
        align-items: center;
        justify-content: center;
        .hire-me-info {
            p {
                color: #fff;
                font-size: 20px;
                text-align: center;
                &:nth-child(1) {
                    margin-bottom: 25px;
                    font-weight: 800;
                    letter-spacing: 1px;
                }
                &:nth-child(2) {
                    margin-bottom: 35px;
                    font-weight: 300;
                }
                &:nth-child(3) {
                    width: 108px;
                    height: 37px;
                    line-height: 37px;
                    background: rgba(255, 255, 255, .8);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    border-radius: 3px;
                    font-size: 13px;
                    color: @gray-11;
                    margin: 0 auto;
                    &:hover {
                        cursor: pointer;
                        background-color: #fff;
                    }
                }
            }
        }
    }

    .footer-box {
        background-color: @gray-22;
        height: 215px;
        display: flex;
        justify-content: center;
        align-items: center;
        .footer-info {
            p {
                text-align: center;
                font-size: 14px;
                line-height: 25px;
            }
            .footer-link {
                margin-bottom: 20px;
                li {
                    float: left;
                    a {
                        width: 36px;
                        height: 36px;
                        display: inline-block;
                        font-size: 18px;
                        border: 1px solid rgba(255, 255, 255, .1);
                        color: rgba(255, 255, 255, .2);
                        vertical-align: middle;
                        margin: 8px;
                        border-radius: 3px;
                        text-align: center;
                        line-height: 34px;
                        transition: all .3s;
                        &:hover {
                            border-color: rgba(255, 255, 255, .5);
                            color: rgba(255, 255, 255, .8);
                        }
                    }
                }
            }
            .footer-made-by-place {
                color: #fff;
                margin-bottom: 10px;
                .heart {
                    width: 30px;
                    height: 30px;
                    color: #ff5252;
                    display: inline-block;
                    vertical-align: bottom;
                }
            }
            .footer-made-by-who {
                color: #fff;
            }
        }
    }

    .scroll-up {
        width: 35px;
        height: 35px;
        position: fixed;
        right: 28px;
        bottom: 28px;
        background-color: rgba(135, 135, 135, 0.5);
        border-radius: 3px;
        transition: all .5s;
        z-index: 99;
        transform: scale(0);
        &:hover {
            cursor: pointer;
            background-color: rgba(235, 235, 235, .8);
            &:before {
                transition: all .5s;
                border-left-color: #e7746f;
                border-top-color: #e7746f;
            }
        }
        .arrow(45deg, 35px);
    }
</style>