import Vue from "vue"
import Router from "vue-router"
import Login from '@/pages/login/index'
import Home from '@/pages/home/index'
import User from '@/pages/user/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/user',
            name: 'User',
            component: User
        }
    ],
    // 修改此处！解决路由不生效问题！
    mode: 'history'
})