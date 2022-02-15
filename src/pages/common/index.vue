<template>
<div>
    <!-- <home></home> -->
    <el-menu :default-active="this.$route.path" router mode="horizontal" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            <template slot="title">
                <i class="el-icon-s-platform"></i>
                <span> {{ item.navItem }}</span>
            </template>
        </el-menu-item>
        <div class="right-button"><el-button type="primary" icon="el-icon-edit" circle></el-button></div>
    </el-menu>
    <router-view />
</div>
</template>

<script>
export default {
    name: 'parent',
    data() {
        return {
            navList: [{
                    name: '/',
                    navItem: '主页'
                },
                {
                    name: '/passwd',
                    navItem: '密码库'
                },
                {
                    name: '/user',
                    navItem: '用户管理'
                },
                {
                    name: '/login',
                    navItem: '登陆'
                },
                {
                    // name: '/logout',
                    navItem: '退出'
                },
            ],
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        // 退出逻辑
        logout() {
            alert("logout!")
            localStorage.removeItem('token')
            location.replace('/login')
        },
        handleClick(item) {
          if (item.name === "/logout") {
            this.logout()
          }
        }
    }
}
</script>

<style>
.right-button{
    text-align: right;
    height: 61px;
    line-height: 61px;
    margin-right: 30px;
}
.logoutButton{
 color: brown;
}
</style>
