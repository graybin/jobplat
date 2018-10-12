<template>
    <div class="tab">
        <tabbar class="tabbar">
            <tabbar-item @on-item-click='handleclick("/joblist")'>
                <img slot="icon" src="../../../static/boy.jpg">
                <span slot="label">信息列表</span>
            </tabbar-item>
            <tabbar-item show-dot @on-item-click='handleclick("/newlist")'>
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
    }
    
}
</script>

<style>
.tab .tabbar{
    position: fixed;
    bottom: 0;
}
</style>
