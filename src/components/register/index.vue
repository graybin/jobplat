<template>
    <div class="registerpa">
        <img src="../../../static/logo.jpg" style="width:100px; height:100px;">
        <h3>职位服务</h3>
        <x-input title='用户名 ' placeholder=' 请输入用户名' v-model="name" @on-change='inputchange'></x-input>
        <x-input  title='密码  ' placeholder=' 请输入密码' v-model="password" type='password' @on-change='inputchange'></x-input>
        <x-input title='确认密码' placeholder=' 请输入密码' v-model="repeatpass" type='password' @on-change='inputchange'></x-input>
        <group>
            <radio title="选择身份" :options="options" v-model="type"></radio>
        </group>
        <div class="tips" v-if="tipshow">{{this.tip}}</div>
        <whitespace></whitespace>
        <x-button disbaled='false' type='primary' text="注册" @click.native="doregister"></x-button>
        <whitespace></whitespace>
        <router-link to="/">已有账号，前去登录...</router-link>
    </div>
</template>
<script>
import { XInput, XButton, Radio, Group} from 'vux'
import whitespace from '../base/whiteSpace'
import axios from 'axios'
export default {
    data(){
        return{
            options:['求职','招聘'],
            type: '求职',
            name: '',
            password: '',
            repeatpass: '',
            tip:'',
            tipshow: false,
        }
    },
    components:{
        XInput,
        XButton,
        whitespace,
        Radio,
        Group,
    },
    methods: {
        doregister(){
            var info = {
                name: this.name,
                password: this.password,
                type: this.type
            }
            info = JSON.stringify(info)
            var that = this
            if(this.checkinput()){
                axios({
                    method: 'get',
                    url: 'http://localhost:9093/user/register',
                    params:{info}
                }).then(function(res){
                    if(res.data.code == '1'){
                        that.tip = '用户名已存在，请修改'
                        that.tipshow = true
                    }else{
                        that.$store.commit('setname',that.name)
                        if(res.data.type == '招聘'){
                            that.$router.push('/employerinfo')
                        }else{
                            that.$router.push('/employeeinfo')
                        }             
                    }          
                })
            }else{
                
            }
        },
        checkinput(){
            if(this.name.length > 4 &&this.password!='' &&  this.password == this.repeatpass){
                return true
            }else{
                if(this.name.length < 4 ){
                    this.tip = '用户名至少5个字符,请检查'
                    this.tipshow = true
                }else if(this.password == ''){
                    this.tip = '密码不能为空'
                    this.tipshow = true
                }else if(this.password != this.repeatpass){
                    this.tip = '两次密码输入不一致'
                    this.tipshow = true
                }
                return false
            }
        },
        inputchange(){
            this.tip = ''
            this.tipshow = false
        }
    }
}
</script>
<style>
.weui-cells label{
    line-height: 0.1;
}
.registerpa{
    text-align: center;
    padding-top: 100px;
}
.tips{
    color: red;
    text-align: left;
}
</style>
