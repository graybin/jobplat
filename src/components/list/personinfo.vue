<template>
    <div>
        <div class="imgshow">
            <img src="../../../static/oldlady.jpg" >
            <p></p>
            <p>{{this.name}}</p>
        </div>
        <div class="showinfo">
            <card>
                <div slot="content">
                    {{this.des}}
                </div>
            </card>
        </div>
        <x-button text='退出登录' type='primary' @click.native="logout"></x-button>
    </div>
</template>
<script>
import {XButton,Card} from 'vux'
export default {
    name: 'personinfo',
    data(){
        return {
            name: '',
            des: '',
            img: '',
        }
    },
    components: {
        XButton,
        Card
    },
    mounted(){
        var store = this.$store.state
        this.name = store.name
        this.img = store.img
        this.des = store.des
    },
    methods: {
        logout(){
            this.$store.commit('setname','')
            window.sessionStorage.removeItem('info')
            this.$router.push('/login')
        }
    }
}
</script>
<style>
.imgshow{
    text-align: center
}
.imgshow img{
    width: 100px;
    height: 100px;
}
.showinfo{
    padding: 0 0 20px 10px;
}
</style>


