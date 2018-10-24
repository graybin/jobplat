<template>
    <div>
        <x-header title="消息列表" :left-options='{showBack:false}'></x-header>
        <div v-for="(item ,index) in chathistory" :key="index" style="display:relative;paddding-left: 15px;border:1px solid #eee; margin-top: 15px;">
            <img src="../../../static/beauty.jpg" style="width:50px;height:50px;">
            <div style="display:inline-block;line-height:50px;position:absolute;padding-left: 15px;">{{ item.with }}</div>
        </div>
    </div>
</template>
<script>
import { XHeader } from 'vux'
import axios from 'axios'
export default {
    name: 'news',
    data(){
        return {
            chathistory: [{name:'吴楚楚'}, {name: '林小光'}],

        }
    },
    components: {
        XHeader,
    },
    methods: {

    },
    mounted(){
        var name = this.$store.state.name;
        var that = this
        axios({
            method: 'get',
            url: 'http://localhost:9093/user/news',
            params: {name}
        }).then(function(res){
            that.chathistory = res.data
        })
    }
}
</script>
<style>

</style>


