<template>
    <div class="cardlist">
        <card  v-for="item in list" :key="item.name" class="carditem">
            <div slot="header" class="itemheader">
                <div class="itemleft">
                    <img src="../../../static/oldlady.jpg">
                    <div style="line-height: 50px;display:inline-block;float: left;">{{item.name}}</div>
                </div>
                <div class="itemright">岗位：{{item.job}}</div>
            </div>
            <div class="infocontent" slot='content'>
                <p v-if='type=="求职"'>公司：{{item.company}}</p>
                <p>简介：{{item.des}}</p>
                <p v-if='type=="求职"'>薪资：{{item.money}}</p>
            </div>
        </card>
    </div>
</template>
<script>
import {Card} from 'vux'
import axios from 'axios'
export default {
    data(){
        return {
            list: [],
            type: '',
        }
    },
    components: {
        Card
    },
    mounted(){
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
    }
}
</script>
<style>
.carditem img{
    float: left;
    width: 50px;
    height: 50px;
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


