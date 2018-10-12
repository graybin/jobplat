<template>
    <div>   
        <h2>employee信息完善</h2>
        <chooseimg></chooseimg>
        <x-input title="求职职位" placeholder='职位名称'></x-input>
        <x-input title="个人简介" placeholder='简介说明'></x-input>
        <whitespace></whitespace>
        <x-button text='保存' type='primary'></x-button>
    </div>
</template>
<script>
import {XInput,XButton} from 'vux'
import chooseimg from '../base/chooseImg'
import whitespace from '../base/whiteSpace'
export default {
    name: 'employeeinfo',
    data(){
        return{

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