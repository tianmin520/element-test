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
      <el-aside width="200px" class="Aside">Aside</el-aside>
      <el-main class="Main">Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {};
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