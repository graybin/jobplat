<template>
    <div class="loginpa">
        <img src="../../../static/logo.jpg" width="100px" height="100px">
        <h3>职位服务</h3>
        <whitespace></whitespace>
        <x-input title='用户名' placeholder=' 请输入用户名' v-model="name"></x-input>
        <x-input type="password" title='密码 ' placeholder=' 请输入密码' v-model="password"></x-input>
        <div v-if="tipshow" class="tips">账号密码有误!</div>
        <whitespace></whitespace>
        <whitespace></whitespace>
        <x-button type='primary' text="登录" @click.native="tologin"></x-button>
        <whitespace></whitespace>
        <router-link to='/register'>没有账号，点击注册...</router-link>
        <alert title='输入错误' :content='alertcontent' :value='alertshow' @on-show='!alertshow'></alert>
    </div>
</template>
<script>
import { XInput, XButton,Alert } from 'vux'
import whitespace from '../base/whiteSpace'
import axios from 'axios'
export default {
    data(){
        return {
            name: '',
            password: '',
            alertshow: false,
            alertcontent: '',
            tipshow: false
        }
    },
    components:{
        XInput,
        XButton,
        whitespace,
        Alert
    },
    methods:{
        tologin(){
            var that = this
            var info = JSON.stringify({
                name: this.name,
                password: this.password
            })
            if(this.name.length>4 && this.password!=''){
                axios({
                    method: 'get',
                    url: 'http://localhost:9093/user/login',
                    params:{info}
                }).then(function(res){
                    if(res.data.code == '1'){
                        that.tipshow = true
                    }else{
                        that.$store.commit('setname',that.name)
                        that.$router.push('/list')
                    }
                }).catch(function(err){console.log(err)})
            }else{
                if(this.name == '' || this.password == ''){
                    this.alertcontent = '账号密码不能为空'
                    this.alertshow = true
                }else{
                    this.alertcontent = '账号至少5个字符，请检查'
                    this.alertshow = true
                }
            }
        }
    }
}
</script>
<style>
.loginpa{
    text-align: center;
    padding-top: 100px;
}
a {
    text-decoration: none;
}
.tips{
    color:red;
    text-align: left;
    padding-left: 20px;
}
</style>


