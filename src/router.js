import Vue from 'vue'
import Router from 'vue-router'
import Login from "views/Login.vue"
import Index from "views/Index.vue"
//import Index from 'views/Index.vue'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: '主页',
      redirect: '/login'
    },
    {
      path: '/index',
      name: 'index',
      component: Index

    }
  ]
})

export default router
