<template>
    <div class="info-section-panel">
        <div class="text-info-box">
            <h1 class="title">{{title}}</h1>
            <p class="line"></p>
            <p class="description">{{content}}</p>
        </div>
        <slot name="contentCard"></slot>
    </div>
</template>
<script>
export default {
    props: {
        title: String,
        content: String
    }
}
</script>
<style type="text/less" lang="less">
    @import (reference) '~@frontend/global/style/global.less';
    .info-section-panel {
        padding: 100px 0 100px 0;
        background-color: #f5f5f5;
        .text-info-box {
            width: 555px;
            margin: 0 auto;
        }
        .title {
            text-align: center;
            font-weight: 800;
            letter-spacing: 5px;
        }
        .line {
            width: 100px;
            height: 1px;
            background-color: rgba(135, 135, 135, 0.5);
            margin: 30px auto;
        }
        .description {
            text-align: center;
            color: @gray-66;
            line-height: 32px;
            font-size: 18px;
            font-weight: 300;
        }
    }
</style>