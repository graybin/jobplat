<template>
    <div>
        <img src="../../assets/logo.png">
        <h3>注册页</h3>
        <x-input title='用户名 ' placeholder=' 请输入用户名' v-model="name"></x-input>
        <x-input  title='密码  ' placeholder=' 请输入密码' v-model="password" type='password'></x-input>
        <x-input title='确认密码' placeholder=' 请输入密码' v-model="repeatpass" type='password'></x-input>
        <group>
            <radio title="选择身份" :options="options" v-model="type"></radio>
        </group>
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
            options:['employee','employer'],
            type: 'employee',
            name: '',
            password: '',
            repeatpass: ''
        }
    },
    components:{
        XInput,
        XButton,
        whitespace,
        Radio,
        Group
    },
    methods: {
        doregister(){
            var info = {
                name: this.name,
                password: this.password,
                type: this.type
            }
            info = JSON.stringify(info)
            if(this.checkinput()){
                axios({
                    method: 'get',
                    url: 'http://localhost:9093/user/register',
                    params:{info}
                })
            }else{
            }
        },
        checkinput(){
            if(this.name != '' && this.password == this.repeatpass){
                return true
            }else{
                return false
            }
        }
    }
}
</script>
<style>
.weui-cells label{
    line-height: 0.1;
}
</style>
