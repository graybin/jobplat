import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/'
import Register from '@/components/register'
import employerinfo from '@/components/info/employer'
import employeeinfo from '@/components/info/employee'
import list from '@/components/list'
import newlist from '@/components/list/newlist'
import personinfo from '@/components/list/personinfo'
import joblist from '@/components/list/joblist'
import news from '@/components/list/news'
import video from '@/components/list/video'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/employerinfo',
      name: 'employerinfo',
      component: employerinfo
    },
    {
      path: '/employeeinfo',
      name: 'employeeinfo',
      component: employeeinfo
    },
    {
      path: '/list',
      name: 'list',
      component: list,
      redirect: '/joblist',
      children: [{
        path: '/joblist',
        component: joblist
      },{
        path: '/newlist',
        component: newlist
      },{
        path: '/personinfo',
        component: personinfo
      },{
        path: '/news',
        component: news
      },{
        path: '/video',
        component: video
      }]
    }
  ]
})
