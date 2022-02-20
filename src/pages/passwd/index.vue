<template>
<div>
    密码库
</div>
</template>

<script>
// import axios from 'axios';
export default {
    name: 'User',
    data() {
        return {
            user: []
        }
    },
    mounted() {
        this.getUser();
    },
    methods: {
        getUser() {
            // axios.get('/user/getall').then(res => {
            //     console.log('user', res.data.message)
            //     this.user.push(res.data.message)
            // })
            return {
            userList: [{
                    name: 'niko',
                    role: 'admin'
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
                // {
                //     name: '/logout',
                //     navItem: '退出'
                // },
            ],
        }

        }
    }
}
</script>

<style scoped>
</style>
