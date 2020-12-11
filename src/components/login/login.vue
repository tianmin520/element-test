<template>
  <div class="login-wrap">
    <el-form
			class="login-form"
      :label-position="labelPosition"
      label-width="80px"
      :model="LoginData"
    >
			<h3>用户登录</h3>
      <el-form-item label="用户名">
        <el-input v-model="LoginData.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="LoginData.password"></el-input>
      </el-form-item>
			<el-button 
			type="primary" 
			class="login-btn"
			@click="handleLogin()"
			>登录</el-button>
    </el-form>
  </div>
	
</template>

<script>
export default {
    data(){
        return {
            labelPosition:'top',
            LoginData:{
                "username":'',
                "password":''
						}
        }
		},
		methods:{
			handleLogin(){
				if(this.LoginData.username=='admin'&&this.LoginData.password=='123'){
					this.$router.push({name:'home'})
					this.$message.success('登录成功');
				}else{
					this.$message.error('登录失败');
				}
			}
		}
};
</script>

<style>
.login-wrap{
	height: 100%;
	background-color: #234152;
	display: flex;
	justify-content: center;
	align-items: center;
}
.login-wrap .login-form{
	width: 400px;
	background-color: #fff;
	padding: 30px;
	border-radius: 5px;
}
.login-btn{
	width: 100%;
	letter-spacing: 3px;
	font-size: 16px;
}
</style>