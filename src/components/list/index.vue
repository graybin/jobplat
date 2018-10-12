<template>
    <div>
        <router-view></router-view>
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
    }
}
</script>

