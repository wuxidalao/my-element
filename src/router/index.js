import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/dashboard'
    },
    {
      path: '/',
      component: resolve => require(['../components/common/home.vue'], resolve),
      meta: { title: '主页' },
      children: [
        {
          path: '/dashboard',
          component: resolve => require(['../components/page/01.vue'], resolve),
          meta: { title: '系统首页' }
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../components/common/login.vue'], resolve)
    }
  ]
})
