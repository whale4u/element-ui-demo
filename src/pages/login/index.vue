<template>
  <div class="login-wrap">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>登录界面</span>
      </div>
      <el-form lable-width="160px" inline>
          <el-form-item label="用户名：">
              
              <el-input v-model="username" placeholder="请输入用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码：">
              
              <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
          </el-form-item>
          <!-- <el-form-item>
              <el-button>登录</el-button>
              <el-button>重置</el-button>
          </el-form-item> -->
          <div>
              <el-button>登录</el-button>
              <el-button>重置</el-button>
          </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
        username: '',
        password: ''
    }
  }
}
</script>

<style scoped>
.login-wrap {
  text-align: center
}
.box-card{
    width: 400px;
    display: inline-block;
}
</style>