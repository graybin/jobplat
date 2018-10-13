<template>
    <div>   
        <h2>求职者信息完善</h2>
        <chooseimg></chooseimg>
        <x-input title="求职职位" placeholder='职位名称' v-model="job" @on-change='inputchange'></x-input>
        <x-input title="个人简介" placeholder='简介说明' v-model="des" @on-change='inputchange'></x-input>
        <div class="infotips" v-if="tipshow">{{tip}}</div>
        <whitespace></whitespace>
        <x-button text='保存' type='primary' @click.native="saveinfo"></x-button>
    </div>
</template>
<script>
import {XInput,XButton} from 'vux'
import chooseimg from '../base/chooseImg'
import whitespace from '../base/whiteSpace'
import axios from 'axios'
export default {
    name: 'employeeinfo',
    data(){
        return{
            job: '',
            des: '',
            tipshow: false,
            tip: '请填写信息'
        }
    },
    components: {
        XInput,
        chooseimg,
        XButton,
        whitespace
    },
    methods: {
        saveinfo(){
            var that = this
            var name = that.$store.state.name
            if(this.job && this.des){
                axios({
                    methods: 'get',
                    url: 'http://localhost:9093/user/eeinfo',
                    params:{name:name,job:that.job,des:that.des}
                }).then(function(res){
                    if(res.data.code == '0'){
                        that.$router.push('/list')
                    }
                })
            }else{
                this.tipshow = true
            }
        },
        inputchange(){
            this.tipshow = false
        }
    }
}
</script>
<style>
.infotips{
    color: red;
    text-align: left;
}
</style>