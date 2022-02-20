<template>
<div>
    <!-- <div>{{user}}</div> -->
    <el-table :data="user[0]" style="width: 100%">
        <el-table-column prop="username" label="用户名" width="180">
        </el-table-column>
        <el-table-column prop="password" label="密码" width="180">
        </el-table-column>
        <el-table-column prop="role" label="角色" width="180">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'User',
    data() {
        return {
            user: [],

        }
    },
    mounted() {
        console.log('22312321')
        this.getUser();
    },
    methods: {
        getUser() {
            axios.get('http://localhost:8090/users').then(res => {
                // console.log('user', res.data.message)
                // this.user.push(res.data.message)
                console.log(res.data[0])
                this.user.push(res.data)
            })
        }
    }
}
</script>

<style scoped>
</style>
