<template>
    <div>
        <!--<img src="localhost:3000/users/" alt="">-->
    </div>
</template>
<script>
import {getUserInfo} from '../../service/user-api/common';

export default {
    beforeMount: function() {
        getUserInfo({i:1}).then(res => {
            console.log(res);
        });
    }
}
</script>
<style>

</style>