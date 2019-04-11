<template>
    <div class="cardlist">
        <x-header :title='listheader' :left-options='{showBack:false}' style="position: fixed; left: 0;width:100%; z-index:500;"></x-header>
        <div style="position: absolute;top: 60px; bottom: 75px; width:100%;overflow:auto;">
            <div  v-for="item in list" :key="item.name" class="carditem" >
                <div slot="header" class="itemheader">
                    <div class="itemleft">
                        <img src="../../../static/oldlady.jpg">
                        <div style="line-height: 50px;display:inline-block;float: left;">{{item.name}}</div>
                    </div>
                    <div class="itemright"><span class="video" @click="tovideo(item.name)"></span><span class="news" @click="tochat(item.name)" style="margin-left: 24px;"></span></div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {Card, XHeader} from 'vux'
import axios from 'axios'
export default {
    data(){
        return {
            list: [],
            type: '',
            listheader: ''
        }
    },
    components: {
        Card,
        XHeader
    },
    mounted(){
        this.listheader = '好友列表'
        var name = this.$store.state.name
        var that = this
        this.type = this.$store.state.type 
        axios({
            method: 'get',
            url: 'http://localhost:9093/user/joblist',
            params: {'name':name}
        }).then(function(res){
            if(res.data instanceof Array){
                that.list = res.data
            }
           
        })
    },
    methods:{
        tochat(name){
            this.$router.push('/newlist')
            this.$store.commit('setchatwith', name)
        },
        tovideo(name){
            this.$router.push('/video')
        }
    }
}
</script>
<style>
.carditem {
    padding-right: 32px;
    border-bottom: 1px solid #ccc;
}
.carditem img{
    float: left;
    width: 50px;
    height: 50px;
}
.itemright .video {
    display: inline-block;
    width: 25px;
    height: 16px;
    background: url('../../../static/video.png');
    background-size: 25px 16px;
}
.itemright .news {
    display: inline-block;
    width: 22px;
    height: 20px;
    background: url('../../../static/news.png');
    background-size: 22px 20px;
}
.itemheader{
    overflow: hidden;
}
.itemleft{
    float: left;
}
.itemright{
    float: right;
    line-height: 50px;
}
.infocontent{
    padding-left: 10px;
}
</style>


