<template>
    <div >
        <router-view style="padding-bottom:70px;"></router-view>
        <ftabbar></ftabbar>
    </div>
</template>

<script>
import ftabbar from '@/components/base/ftabbar'
export default {
    name: 'index',
    data(){
        return {

        }
    },
    components:{
        ftabbar
    },
    beforeMount(){
        var name = this.$store.state.name
        var type = this.$store.state.type
        var info = window.sessionStorage.getItem('info')
        if(!name || !type){
            if(info ){
                info = JSON.parse(info)
                this.$store.commit('setname', info.name)
                this.$store.commit('settype', info.type)
            }else{
                this.$router.push('/login')
            }
        }
    }
}
</script>

