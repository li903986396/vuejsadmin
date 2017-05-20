import Vue from 'vue'
import Router from 'vue-router'

// 导入页面
import LoginPage from '@/pages/Login'
import IndexPage from '@/pages/Index'
import AdminTpl from '@/template/Admin'

Vue.use(Router)

// 定义后台路由
const routes = [
  { path: '/Login', component: LoginPage },
  { path: '/',
    component: AdminTpl,
    children: [
      { path: '/Index', component: IndexPage }
    ]
  }
]

export default new Router({
  // 启用H5路由
  mode: 'history',
  routes: routes
})