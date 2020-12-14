<template>
<el-card class="box-card">
  <!-- 面包屑 -->
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    <el-breadcrumb-item>用户列表</el-breadcrumb-item>
  </el-breadcrumb>
  <!-- 输入框 -->
  <div class="input_style">
    <el-input placeholder="请输入内容" v-model="query" class="input-with-select input_search">
      <el-button slot="append" icon="el-icon-search"></el-button>
    </el-input>
    <el-button type="success" class="btn_search">确认添加</el-button>
  </div>
  <!-- 列表 -->
  <el-table :data="tableData" stripe style="width: 100%">
    <el-table-column type=index label="#" width="60">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="100">
    </el-table-column>
    <el-table-column prop="email" label="邮箱" width="180">
    </el-table-column>
    <el-table-column prop="phone" label="电话" width="160">
    </el-table-column>
    <el-table-column prop="date" label="创建日期">
    </el-table-column>
    <el-table-column prop="address" label="用户状态">
      <template>
        <el-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949">
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column prop="address" label="操作">
      <template>
        <el-button size="small" plain type="primary" icon="el-icon-edit" circle></el-button>
        <el-button size="small" plain type="success" icon="el-icon-check" circle></el-button>
        <el-button size="small" plain type="danger" icon="el-icon-delete" circle></el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
</el-card>
</template>

<script>
export default {
  data() {
    return {
      value: true,
      query: '',
      tableData: [{
          name: '王小虎',
          email: '8888888@qq.com',
          phone: '1888888888',
          date: '2016-05-02',
        },
        {
          name: '王小虎',
          email: '8888888@qq.com',
          phone: '1888888888',
          date: '2016-05-02',
        },
        {
          name: '王小虎',
          email: '8888888@qq.com',
          phone: '1888888888',
          date: '2016-05-02',
        },
        {
          name: '王小虎',
          email: '8888888@qq.com',
          phone: '1888888888',
          date: '2016-05-02',
        }
      ]
    }
  }
};
</script>

<style>
.box-card {
  height: 100%;
}

.input_search {
  width: 400px;
}

.btn_search {
  margin-left: 10px;
}

.input_style {
  margin-top: 15px;
}
</style>
