<template>
    <div :class="'chat-room-box'">
        <!--<el-button-->
            <!--round-->
            <!--type="primary"-->
            <!--size="mini"-->
            <!--@click="closeSendMsg"-->
        <!--&gt;关闭连接-->
        <!--</el-button>-->
        <div
            class="login-page"
            v-if="showLogin"
        >
            <p class="login-title">What's your nickname?</p>
            <el-input
                class="login-input"
                v-model="loginUser"
                autofocus="true"
                @keyup.enter.native="joinWs"
            >

            </el-input>
        </div>
        <div
            class="chat-room"
            v-if="!showLogin">
            <ul class="message">
                <li
                    :class="item.status === 'New' ? 'log' : ''"
                    v-for="(item, index) in chatData">
                    <span
                        :style="{color: colorMap[index] || 'red'}">
                        {{item.userName }}
                    </span>
                    {{item.message}}
                </li>
            </ul>
            <div>
                <el-input
                    class="typing"
                    v-model="sendMsg"
                    placeholder="Type here..."
                    autofocus="true"
                    @keyup.enter.native="clickSendMsg">

                </el-input>
            </div>
        </div>
    </div>
</template>
<script>
    import {getUserInfo} from '../../service/user-api/common';
    import {Button, Select} from 'element-ui';

    export default {
        data: function () {
            return {
                colorMap: ['#1BDAE9', '#1EB260', '#F5BD47', '#5B8EE9', '#EA496C'],
                sendMsg: '',
                chatData: [],
                loginUser: '',
                showLogin: true,
                params: {}
            }
        },
        components: {
            Button
        },
        methods: {
            clickSendMsg: function () {
                this.params.message = this.sendMsg;
                this.ws.send(JSON.stringify(this.params));
                this.sendMsg = '';
            },
            closeSendMsg: function () {
                this.ws.close();
            },
            joinWs: function () {
                const that = this;
                const ws = new WebSocket('ws://127.0.0.1:4000');
                this.showLogin = false;
                that.ws = ws;
                ws.onopen = function (e) {
                    that.params.userName = that.loginUser;
                    ws.send(JSON.stringify(that.params));
                };
                ws.onmessage = function (e) {
                    that.chatData.push(JSON.parse(e.data));
                };
            }
        },
        beforeMount: function () {
            let params = {i: 1};
            // getUserInfo({params}).then(res => {
            //     console.log(res);
            // });
        }
    }
</script>
<style lang="less">
    @import (reference) '~@frontend/global/style/global.less';
    // 会scoped 造成覆盖不了样式.要在全局中覆盖样式
    .chat-room-box {
        width: 1200px;
        height: 480px;
        margin: 70px auto 0;
        .login-page {
            width: 100%;
            height: 100%;
            background-color: #000;
            border-radius: 4px;
            overflow: hidden;
            .login-title {
                height: 50px;
                line-height: 50px;
                font-size: 32px;
                text-align: center;
                color: #fff;
                font-weight: 300;
                margin: 50px 0;
            }
            .login-input {
                text-align: center;
                input {
                    width: 400px;
                    height: 57px;
                    border: none;
                    border-bottom: 2px solid #fff;
                    background-color: #000;
                    border-radius: 0;
                    color: #fff;
                    font-size: 32px;
                    font-weight: 100;
                    padding-bottom: 20px;
                    text-align: center;
                }
            }
        }
        .chat-room {
            width: 100%;
            height: 100%;
            background-color: #fff;
            .message {
                height: 100%;
                li {
                    height: 30px;
                    line-height: 30px;
                    &.log {
                        text-align: center;
                        color: @gray-66;
                        font-size: 16px;
                        font-weight: 300;
                    }
                }
            }
            .typing {
                width: 100%;
                height: 60px;
                border: 10px solid #000;
                input {
                    border: none;
                    font-size: 16px;
                    color: @gray-66;
                }
            }
        }
    }
</style>