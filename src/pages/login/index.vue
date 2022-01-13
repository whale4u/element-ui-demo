<template>
  <div class="login-wrap">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录界面</span>
      </div>
      <el-form lable-width="160px" inline>
          <el-form-item label="用户名：">
              <el-input v-model="loginForm.username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
              <el-input placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
          </el-form-item>
          <!-- <el-form-item>
              <el-button>登录</el-button>
              <el-button>重置</el-button>
          </el-form-item> -->
          <div>
              <el-button id="button" @click="getToken">登录</el-button>
              <el-button id="button">重置</el-button>
          </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import axios from 'axios';
// import { getData } from '../../../http'
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
  mounted() {
    // this.getToken();
  },
  methods: {
    getToken() {
      axios.post('/home/login', JSON.stringify(this.loginForm))
      .then(function (response) {
        // console.log(response.data)
        const data = response?.data?.data;
        if(data?.token) {
          localStorage.setItem('token', data.token)
          console.log(data.token)
          location.replace('/')
        } else {
          alert("登录失败！")
        }
      })
      .catch(function (error) {
        console.log(error)
      });
      // axios.get('/model/data.json').then(res => {
      //   const data = res?.data?.data;
      //   if(data?.token) {
      //     // 存入token
      //     localStorage.setItem('token', data.token)
      //     console.log(data.token)
      //     // location.href = '/'
      //     // 另一种写法
      //     location.replace('/')
      //   }
      // })
      // getData('/model/data.json').then(res => {
      //   console.log('res:', res.data);
      //     if(res.token) {
      //     location.href = '/home'
      //   }
      // })
    }
  }
}
</script>

<style scoped>
.login-wrap {
  text-align: center
}

/* 类选择器 */
.box-card{
    width: 400px;
    display: inline-block;
    color: red;
    border: 2px rebeccapurple dashed;
    background: aquamarine;
}

/* id选择器 */
#button {
  color: blue;
  background: yellowgreen;
}
</style>