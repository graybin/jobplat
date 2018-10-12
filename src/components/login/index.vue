<template>
    <div>
        <img src="../../assets/logo.png">
        <h3>登录页</h3>
        <x-input title='用户名' placeholder=' 请输入用户名' v-model="name"></x-input>
        <x-input title='密码 ' placeholder=' 请输入密码' v-model="password"></x-input>
        <whitespace></whitespace>
        <x-button type='primary' text="登录" @click.native="tologin"></x-button>
        <whitespace></whitespace>
        <router-link to='/register'>没有账号，点击注册...</router-link>
    </div>
</template>
<script>
import { XInput, XButton } from 'vux'
import whitespace from '../base/whiteSpace'
import axios from 'axios'
export default {
    data(){
        return {
            name: '',
            password: ''
        }
    },
    components:{
        XInput,
        XButton,
        whitespace,
    },
    methods:{
        tologin(){
            var info = JSON.stringify({
                name: this.name,
                password: this.password
            })
            if(this.name!=''&& this.password!=''){
                axios({
                    method: 'get',
                    url: 'http://localhost:9093/user/login',
                    params:{info}
                })
            }
        }
    }
}
</script>

