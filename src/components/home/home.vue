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
          <a class="loginout" href="#">退出</a>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px" class="Aside">
        <el-menu
      default-active="2"
      unique-opened="true"
      active-text-color="#f57555"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <i class="el-icon-s-order"></i>
            <span>分组一</span>
          </el-menu-item>
          <el-menu-item index="1-2">
            <i class="el-icon-s-order"></i>
            <span>分组一</span>
          </el-menu-item>
        </el-menu-item-group>
       
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航二</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">
            <i class="el-icon-s-order"></i>
            <span>分组一</span>
          </el-menu-item>
          <el-menu-item index="2-2">
            <i class="el-icon-s-order"></i>
            <span>分组一</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航三</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1">
            <i class="el-icon-s-order"></i>
            <span>分组一</span>
          </el-menu-item>
          <el-menu-item index="3-2">
            <i class="el-icon-s-order"></i>
            <span>分组一</span>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航四</span>
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
      
      
    </el-menu>
    </el-aside>
      <el-main class="Main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
};
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