<template>
    <div id="qw">
        <Header
            :data='headerData'
        ></Header>
        lsof -i:端口号 查询占用端口号8888的进程
        kill PID 杀掉该进程
    </div>
</template>
<script>
    import Header from '../components/Header/Header.vue';

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
            Header
        },
        mounted: function () {
        }
    }
</script>
<style>

</style>