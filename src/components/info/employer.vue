<template>
    <div>   
        <h2>employer信息完善</h2>
        <chooseimg></chooseimg>
        <x-input title="招娉职位" placeholder='职位名称'></x-input>
        <x-input title="公司名称" placeholder='公司名称'></x-input>
        <x-input title="职位职责" placeholder='职位职责'></x-input>
        <x-input title='职位要求' placeholder='职位要求'></x-input>
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


