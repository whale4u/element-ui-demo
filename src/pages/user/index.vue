<template>
<div>
    <!-- <div>{{user}}</div> -->
    <el-table :data="user[0]" style="width: 100%">
        <el-table-column prop="username" label="日期" width="180">
        </el-table-column>
        <!-- <el-table-column
        prop="password"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="role"
        label="地址">
      </el-table-column> -->
    </el-table>
</div>
</template>

<script>
import axios from 'axios';
// import { getData } from '../../../http'
export default {
    name: 'User',
    data() {
        return {
            user: []
        }
    },
    mounted() {
        // console.log('22312321')
        this.getUser();
    },
    methods: {
        getUser() {
            axios.get('/user/getall').then(res => {
                console.log('user', res.data.message)
                this.user.push(res.data.message)
            })
            // getData('/model/user.json').then(res => {
            //   console.log(res);
            //   this.user.push(res)
            // })
        }
    }
}
</script>

<style scoped>
</style>
