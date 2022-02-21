<template>
<div>
    <!-- <div>{{user}}</div> -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="用户名">
            <el-input v-model="formInline.user" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
            <el-select v-model="formInline.region" placeholder="活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="queryUser(formInline.user)">查询</el-button>
        </el-form-item>
    </el-form>
    <!-- 表格搜索框 -->
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
            formInline: {
                user: '',
                region: ''
            }

        }
    },
    mounted() {
        // console.log('22312321')
        this.getUser();
    },
    methods: {
        // 搜索功能存在bug  2022-02-20 23:58:52
        queryUser(user) {
            // console.log(user);
            if (user != "") {
                axios.get("http://localhost:8090/users", {
                    params: {
                        username: user
                    },
                }).then(res => {
                    this.user = []
                    this.user.push(res.data)
                })
            } else {
                this.getUser();
            }
        },
        getUser() {
            axios.get('http://localhost:8090/users').then(res => {
                // console.log('user', res.data.message)
                // this.user.push(res.data.message)
                // console.log(res.data)
                this.user.push(res.data)
            })
        }
    }
}
</script>

<style scoped>
</style>
