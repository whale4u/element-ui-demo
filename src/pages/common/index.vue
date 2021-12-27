<template>
  <div >
    <!-- <home></home> -->
  <el-header>
    <el-menu
      :default-active="this.$route.path" 
      router mode="horizontal"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
        <template slot="title">
          <i class="el-icon-s-platform"></i>
          <span> {{ item.navItem }}</span>
        </template>
      </el-menu-item>        
    </el-menu>
  </el-header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'parent',
  data () {
      return {
         navList:[ 
            {name:'/',navItem:'主页'}, 
            {name:'/components/Management',navItem:'xxx'},
            {name:'/components/User',navItem:'xxx'}, 
            {name:'/user',navItem:'用户设置'}, 
            {name:'/login',navItem:'登陆'}, 
        ],
      }
  }
}
</script>

<style>
</style>
