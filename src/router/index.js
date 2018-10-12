import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/login/'
import Register from '@/components/register'
import employerinfo from '@/components/info/employer'
import employeeinfo from '@/components/info/employee'

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
    }
  ]
})
