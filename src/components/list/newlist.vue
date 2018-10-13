<template>
    <div>
        <div class="chatinput">
            <x-input class="msginput" placeholder='请输入消息' v-model='msg'></x-input>
            <x-button class="msgsend" text='发送' @click.native="sendmsg"></x-button>
        </div>
    </div>
</template>
<script>
import io from 'socket.io-client'
import {XInput, XButton} from 'vux'
const socket = io('ws://localhost:9093')

export default {
    name: 'newlist',
    data(){
        return {
            msg :'',
        }
    },
    mounted(){
        socket.on('recvmsg',function(data){
            console.log(data)
        })
    },
    components: {
        XInput,
        XButton
    },
    methods: {
        sendmsg(){
            socket.emit('sendmsg',{text:this.msg})
        }
    }
}
</script>
<style>
.chatinput{
    position: fixed;
    display: flex;
    bottom: 100px;
}
.chatinput .msginput{
    flex: 0.7;
}
.chatinput .msgsend{
    flex: 0.3;
}
</style>


