<template>
    <div class="tab">
        <tabbar class="tabbar">
            <tabbar-item @on-item-click='handleclick("/joblist")'>
                <img slot="icon" src="../../../static/boy.jpg">
                <span slot="label">信息列表</span>
            </tabbar-item>
            <tabbar-item show-dot @on-item-click='handleclick("/news")'>
                <img slot="icon" src="../../../static/boy.jpg">
                <span slot="label">消息</span>
            </tabbar-item>
            <tabbar-item selected @on-item-click='handleclick("/personinfo")'>
                <img slot="icon" src="../../../static/boy.jpg">
                <span slot="label">我的信息</span>
            </tabbar-item>
        </tabbar>
    </div>
</template>
<script>
import { Tabbar, TabbarItem } from 'vux'
import axios from 'axios'
export default {
    name: 'ftabbar',
    components:{
        Tabbar, 
        TabbarItem
    },
    methods: {
        handleclick(path){
            this.$router.push(path)
        }
    },
    
}
</script>

<style>
.tab{
    width: 100%;
    position: fixed;
    left:0;
    bottom: 0;
}
.tab .tabbar {
    height: 70px;
}
.tab .tabbar span{
    font-size: 15px;
}
.tab .tabbar img{
    width: 35px;
    height: 25px;
}
.tab .tabbar a{
    text-decoration: none;
}
</style>
