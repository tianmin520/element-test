<template>
  <el-container class="container">
    <el-header class="Header">
      <el-row>
        <el-col :span="4">
          <div class="grid-content bg-purple">
            <img src="../../assets/logo.png" alt="照片无法显示">
          </div>
        </el-col>
        <el-col :span="18" class="middle">
          <h3>COLOR-UI后台管理系统</h3>
        </el-col>
        <el-col :span="2">
          <a class="loginout" href="#" @click="handleExit">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="Aside">
        <el-menu
      default-active="2"
      active-text-color="#f57555"
      class="el-menu-vertical-demo"
      unique-opened
      router
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="users">
            <i class="el-icon-success"></i>
            <span>用户列表</span>
          </el-menu-item>
        </el-menu-item-group>
       
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>权限管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <i class="el-icon-success"></i>
            <span>分组一</span>
          </el-menu-item>
          <el-menu-item index="2-2">
            <i class="el-icon-success"></i>
            <span>分组一</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>商品管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
            <i class="el-icon-success"></i>
            <span>分组一</span>
          </el-menu-item>
          <el-menu-item index="3-2">
            <i class="el-icon-success"></i>
            <span>分组一</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>订单管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="4-1">
            <i class="el-icon-s-order"></i>
            <span>分组一</span>
          </el-menu-item>
          <el-menu-item index="4-2">
            <i class="el-icon-s-order"></i>
            <span>分组一</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>数据统计</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="5-1">
            <i class="el-icon-success"></i>
            <span>分组一</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      
      
    </el-menu>
    </el-aside>
      <el-main class="Main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  beforeCreate(){
    // 检查是否有token，防止直接输入url进入
    const token = localStorage.getItem('token')
    if(!token){
      // 如果没有token那么在加载组件的时候就会退出到登录页面
      this.$router.push({name:'login'})
    }
    // 存在token 继续进行
  },
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      // 退出功能
      handleExit(){
        // 清除token
        localStorage.clear('token')
        // 退出提示
        this.$message.success('退出成功')
        // 路由跳转
        this.$router.push({name:'login'})
      }
    }
}
</script>

<style>
.container {
  height: 100%;
}
.Header {
  background-color: #b3c0d1;
}
.Header img{
  width: 60%;
}
.Header h3{
  color:#fff;
  font-size: 25px;
  line-height: 10px;
  padding-right: 100px;
}
.Aside {
  background-color: #d3dce6;
}
.Main {
  background-color: #e9eef3;
}
.middle{
  text-align: center;
}
.loginout{
  line-height: 60px;
  text-decoration: none;
  color: #05408d;
}
</style>