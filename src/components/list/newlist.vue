<template>
    <div>
        <x-header :title='chatwith' style="position: fixed;width:100%;"></x-header>
        <whitespace></whitespace>
        <div ref="contentlist" style="position: relative; height:450px; top: 40px;overflow:scroll;">
            <div v-for="(item, index) in news" :class="item.class" :key="index" style='position:relative;padding: 5px 0;'>
                <img src="../../../static/beauty.jpg" alt="" style='height:50px;width:50px;display: inline-block;'>
                <span style="background-color:#eee;color:#000;line-height:50px;display:inline-block;position:absolute;">{{item.content}}</span>
            </div>
        </div>
        <div class="chatinput">
            <x-input class="msginput" placeholder='请输入消息' v-model='msg' style='border:1px solid #eee;'></x-input>
            <x-button class="msgsend" text='发送' @click.native="sendmsg"></x-button>
        </div>
    </div>
</template>
<script>
import io from 'socket.io-client'
import {XInput, XButton, XHeader} from 'vux'
import whitespace from '../base/whiteSpace'
const socket = io('ws://localhost:9093')
import axios from 'axios'

export default {
    name: 'newlist',
    data(){
        return {
            chatwith:'',
            msg :'',
            news: [{content: '洗澡先',class: 'from'},{content: 'ok', class:'to'},{content: '洗澡先',class: 'from'},{content: 'ok', class:'to'}]
        }
    },
    mounted(){
        this.chatwith = this.$store.state.chatwith
        var name = this.$store.state.name
        var that = this
        axios({
            method: 'get',
            url: 'http://localhost:9093/user/chat',
            params: {name,chatwith:that.chatwith}
        }).then(function(res){console.log(res.data); return res}).then(function(res){
            that.news = res.data
            that.news.forEach(function(item){
                if(item.from == that.$store.state.name){
                    item.class = 'to'
                }else{
                    item.class = 'from'
                }
            })
            }).then(function(){
                var sheight = that.$refs.contentlist.scrollHeight
                that.$refs.contentlist.scrollTop = sheight
            })
        socket.on('recvmsg',function(data){
            var chatwith = that.$store.state.chatwith
            if((data.from == name && data.to == chatwith) || (data.from == chatwith && data.to == name)){
                if(data.from == name){
                    data.class = 'to'
                }else{
                    data.class = 'from'
                }
                that.news.push(data)
            }
            
        })
    },
    components: {
        XInput,
        XButton,
        XHeader,
        whitespace
    },
    methods: {
        sendmsg(){
            var from = this.$store.state.name
            var to = this.$store.state.chatwith
            var content = this.msg
            var create_time = new Date().getTime()
            var that = this
            socket.emit('sendmsg',{content:this.msg,from:from,to:to})
            axios({
                method: 'get',
                url: 'http://localhost:9093/user/send',
                params: {from,to,content,create_time}
            }).then(function(res){console.log(res); that.msg =''}).then(function(){
                var sheight = that.$refs.contentlist.scrollHeight
                that.$refs.contentlist.scrollTop = sheight
            })
        }
    },
    updated(){
        var sheight = this.$refs.contentlist.scrollHeight
        this.$refs.contentlist.scrollTop = sheight
    }
}
</script>
<style>
.chatinput{
    width: 95%;
    position: fixed;
    display: flex;
    bottom: 75px;
}
.chatinput .msginput{
    flex: 0.7;
}
.chatinput .msgsend{
    flex: 0.3;
}
.from{
    clear: both;
}
.to{
    clear: both;
    position: absolute;
    right: 0;
}
.to img{
    float: right;
}
.to span{
    position: absolute;
    right: 50px;
}
</style>


