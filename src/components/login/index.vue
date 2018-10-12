<template>
    <div>
        <img src="../../assets/logo.png">
        <h3>登录页</h3>
        <x-input title='用户名' placeholder=' 请输入用户名'></x-input>
        <x-input title='密码 ' placeholder=' 请输入密码'></x-input>
        <whitespace></whitespace>
        <x-button type='primary' text="登录"></x-button>
        <whitespace></whitespace>
        <router-link to='/register'>没有账号，点击注册...</router-link>
    </div>
</template>
<script>
import { XInput, XButton } from 'vux'
import whitespace from '../base/whiteSpace'
export default {
    components:{
        XInput,
        XButton,
        whitespace,
    }
}
</script>

