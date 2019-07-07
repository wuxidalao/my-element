import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: resolve => require(['../views/home/home.vue'], resolve),
      meta: { title: '首页' },
      children: [
        {
          path: '/home',
          component: resolve => require(['../components/page/index.vue'], resolve),
          meta: { title: '打开页' }
        },
        {
          path: '/tips',
          component: resolve => require(['../components/page/tips.vue'], resolve),
          meta: { title: '消息' }
        },
        {
          path: '/center',
          component: resolve => require(['../components/page/center.vue'], resolve),
          meta: { title: '个人中心' }
        },
        {
          path: '/chifan',
          component: resolve => require(['../components/page/chifan.vue'], resolve),
          meta: { title: '吃饭' }
        },
        {
          path: '/shuijiao',
          component: resolve => require(['../components/page/shuijiao.vue'], resolve),
          meta: { title: '睡觉' }
        },
        {
          path: '/shezhi',
          component: resolve => require(['../components/page/shezhi.vue'], resolve),
          meta: { title: '设置' }
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../views/login/login.vue'], resolve)
    }
  ]
})
