import Vue from "vue"
import Router from "vue-router"
import Login from '@/pages/login/index'
import Common from '@/pages/common'
import Home from '@/pages/home/index'
import User from '@/pages/user/index'
import Passwd from '@/pages/passwd/index'

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
            name: 'Common',
            component: Common,
            children: [
                {
                    path: '/',
                    name: 'Home',
                    meta: {
                        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
                    },
                    component: Home
                },
                {
                    path: '/user',
                    name: 'User',
                    component: User
                },
                {
                    path: '/passwd',
                    name: 'Passwd',
                    component: Passwd
                }
            ]
        }
    ],
    // 修改此处！解决路由不生效问题！
    mode: 'history'
})

//路由跳转之前
// router.beforeEach((to, from, next) => {
//     if (to.path !== '/login' && !localStorage.token) {
//         alert("请登录！")
//         return next('/login')
//     }
//      next()
//   })

export default router