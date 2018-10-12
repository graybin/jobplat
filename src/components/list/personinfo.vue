<template>
    <div>
        <div class="imgshow">
            <img src="../../../static/oldlady.jpg" >
            <p>graybin</p>
            <p>helloword</p>
        </div>
        <div>
            <h3>我的简历</h3>
        </div>
        <x-button text='退出登录' type='primary'></x-button>
    </div>
</template>
<script>
import {XButton} from 'vux'
export default {
    name: 'personinfo',
    data(){
        return {

        }
    },
    components: {
        XButton
    }
}
</script>
<style>
.imgshow{
    text-align: center
}
.imgshow img{
    width: 100px;
    height: 100px;
}
</style>


