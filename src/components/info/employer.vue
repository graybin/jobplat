<template>
    <div>   
        <h2>招聘者信息完善</h2>
        <chooseimg></chooseimg>
        <x-input title="招娉职位" placeholder='职位名称' v-model="job"></x-input>
        <x-input title="公司名称" placeholder='公司名称' v-model="company"></x-input>
        <x-input title="职位职责" placeholder='职位职责' v-model="des"></x-input>
        <x-input title='薪资水平' placeholder='薪资水平' v-model="money"></x-input>
        <div class="infotips" v-if="tipshow">{{tip}}</div>
        <whitespace></whitespace>
        <x-button text='保存' type='primary'></x-button>
    </div>
</template>
<script>
import {XInput,XButton} from 'vux'
import chooseimg from '../base/chooseImg'
import whitespace from '../base/whiteSpace'
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
    }
}
</script>
<style>

</style>


