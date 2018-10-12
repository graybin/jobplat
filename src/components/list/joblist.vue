<template>
    <div class="cardlist">
        <card  v-for="item in graybin" :key="item" class="carditem">
            <div slot="header" class="itemheader">
                <div class="itemleft">
                    <img src="../../../static/oldlady.jpg">
                    <div style="line-height: 50px;display:inline-block;float: left;">{{item}}</div>
                </div>
                <div class="itemright">高级前端</div>
            </div>
            <div slot='content'>
                <p>熟悉node、熟悉vue</p>
            </div>
        </card>
    </div>
</template>
<script>
import {Card} from 'vux'
export default {
    data(){
        return {
            graybin: ['graybin','blackbin','redbin','bluebin','greenbin']
        }
    },
    components: {
        Card
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
</style>


