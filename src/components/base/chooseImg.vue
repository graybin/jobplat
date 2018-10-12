<template>
    <div>
        <div>
           {{ this.tip}}
           <img v-if='chooseimg' :src="handlechoose()" style="width:50px; height:50px;">
        </div>
        <grid :cols= '4'>
            <grid-item v-for="item in imginfo" :key="item" @click.native="handleclick(item)">
                <img :src='handimg(item)' style="width: 100%; height: 100%;">
            </grid-item>
        </grid>
    </div>
</template>
<script>
import {Grid,GridItem} from 'vux'
export default {
    name: 'chooseimg',
    data(){
        return{
            imginfo: ['beauty','boy','girl','glass', 'man','oldboy','oldlady','women'],
            chooseimg:"",
            tip: '请选择头像'
        }
    },
    components: {
        Grid,
        GridItem ,
    },
    methods: {
        handimg(item){
            return './../../../static/' + item +'.jpg'
        },
        handlechoose(){
            if(this.chooseimg){
                this.tip = '你选的头像'
                return './../../../static/' + this.chooseimg +'.jpg'
            }
        },
        handleclick(item){
            this.chooseimg = item
            console.log(this.chooseimg)
        }
    }
}
</script>

