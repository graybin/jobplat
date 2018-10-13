<template>
    <div>   
        <h2>招聘者信息完善</h2>
        <chooseimg></chooseimg>
        <x-input title="招娉职位" placeholder='职位名称' v-model="job" @on-change='inputchange'></x-input>
        <x-input title="公司名称" placeholder='公司名称' v-model="company" @on-change='inputchange'></x-input>
        <x-input title="职位职责" placeholder='职位职责' v-model="des" @on-change='inputchange'></x-input>
        <x-input title='薪资水平' placeholder='薪资水平' v-model="money" @on-change='inputchange'></x-input>
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
    name: 'employer',
    data(){
        return{
            job:'',
            company: '',
            des:'',
            money: '',
            tip: '请填写各项信息',
            tipshow: false
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
            var name = this.$store.state.name
            if(this.job && this.des && this.company && this.money){
                axios({
                    methods: 'get',
                    url: 'http://localhost:9093/user/erinfo',
                    params:{name:name,job:that.job,des:that.des,company: that.company,money: that.company}
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

</style>


