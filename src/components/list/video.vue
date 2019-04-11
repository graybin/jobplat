<template>
    <div>
        <x-header :title='chatwith' style="position: fixed;width:100%;"></x-header>
        <whitespace></whitespace>
        <div style='position: relative;'>
        <video id='my' src="" autoplay></video>
        <video id='others' src="" autoplay></video>
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
        if(this.hasUserMedia){
            navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia || navigator.msGetUserMedia;
            navigator.getUserMedia({
                video: true,
                audio: true
            },function (stream) {
                var video = document.querySelectorAll('video');
                video[0].srcObject = stream;  
                video[1].srcObject = stream; 
            },function(err) {console.log(err)});
        }else{
            alert('抱歉，不支持getUserMedia.')
        }
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
            })
        },
        hasUserMedia() {
            return !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
                navigator.mozGetUserMedia || navigator.msGetUserMedia);
        }
    },
    updated(){
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
#my {
    position: relative;
    width: 100%;
    height: 100%;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
}
#others {
    position: absolute;
    with: 100px;
    height: 100px;
    top: 50px;
    right: 0;
}
</style>


