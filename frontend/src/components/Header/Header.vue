<template>
    <div
        class="blog-header-wrapper">
        <div
            class="blog-logo-wrapper">
            <span>john</span>
        </div>
        <div
            class="blog-menu-wrapper">
            <ul>
                <li
                    v-for="(item, index) in headerData"
                    :key="index">
                    <span>{{item.title}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            data: Array
        },
        data: function () {
            return {
                headerData: this.data.reverse()
            }
        },
        beforeMount: function () {
        },
        mounted: function () {
        }
    }
</script>
<style lang="less" type="text/less" scoped>
    @import url('../../../global/style/global.less');

    .blog-header-wrapper {
        display: flex;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid #eee;
        padding: 0 100px;
        .blog-logo-wrapper {
            flex: 1;
            font-family: 'Lobster', cursive;
            font-size: 22px;
            color: @gray-22;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        .blog-menu-wrapper {
            flex: 3;
            ul {
                width: 100%;
                li {
                    float: right;
                    margin-left: 30px;
                    font-size: 12px;
                    letter-spacing: 3px;
                    font-weight: 300;
                    color: @gray-22;
                    span {
                        &:hover {
                            color: #E7746F;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
</style>