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
            </InfoSectionPanel>
        </div>
    </div>
</template>
<script>
    import Header from '../components/Header/Header.vue';
    import InfoSectionPanel from '../components/InfoSectionPanel/InfoSectionPanel.vue';
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
                ]
            }
        },
        components: {
            Header,
            InfoSectionPanel
        },
        methods: {
            getDom: function(node) {
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
                    this.header.style = 'height: 51px;';
                } else {
                    header.style = '';
                    this.header.style = '';
                }
            }, 50),
            scrollDown: function(e) {
                this.header.scrollIntoView({ behavior: 'smooth' })
                // window.scroll({ top: 2500, left: 0, behavior: 'smooth' });
            }
        },
        mounted: function () {

            window.addEventListener('scroll', this.scrollView);

        }
    }
</script>
<style type="text/less" lang="less">
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
    }
    .blog-header-box {

    }
</style>