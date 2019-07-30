<template>
    <div
        class="section">
        <h1 class="title">{{title}}</h1>
        <p class="line"></p>
        <p class="description"></p>
        <div class="content-section">{{content}}</div>
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
    .section {
        .title {

        }
        .line {

        }
        .description {

        }
        .content-section {

        }
    }
</style>