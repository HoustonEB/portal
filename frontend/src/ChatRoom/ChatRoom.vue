<template>
    <div :class="'chat-room-box'">
        <el-input
            v-model="sendMsg"
            placeholder="请输入内容"
            :style="{width: '100px'}">

        </el-input>
        <el-button
            round
            type="primary"
            size="mini"
            @click="clickSendMsg"
        >发送消息
        </el-button>
        <el-button
            round
            type="primary"
            size="mini"
            @click="closeSendMsg"
        >关闭连接
        </el-button>
        <div class="chat-room">
            <ul>
                <li
                v-for="(item, index) in chatData">{{item}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
    import {getUserInfo} from '../../service/user-api/common';
    import {Button, Select} from 'element-ui';

    export default {
        data: function () {
            return {
                sendMsg: '12',
                chatData: []
            }
        },
        components: {
            Button
        },
        methods: {
            clickSendMsg: function () {
                this.ws.send(this.sendMsg);
            },
            closeSendMsg: function() {
                this.ws.close();
            }
        },
        beforeMount: function () {
            let params = {i: 1};
            // getUserInfo({params}).then(res => {
            //     console.log(res);
            // });
            const that = this;
            const ws = new WebSocket('ws://127.0.0.1:4000');
            that.ws = ws;
            ws.onopen = function(e) {
                ws.send('hellow-web-socket1');
            };
            ws.onmessage = function(e) {
                that.chatData.push(e.data);
                console.log(e.data);
            };
        }
    }
</script>
<style lang="less" scoped>
    .chat-room-box {
        margin: 50px;
        .chat-room {
            width: 300px;
            height: 400px;
            box-shadow: 0 0 4px 1px #ffc66d;
        }
    }
</style>