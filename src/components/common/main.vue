<template>
  <div>
    <div class="cdrdHeader">
      <el-tag closable>默认标签</el-tag>
      <el-tag closable>默认标签</el-tag>
      <el-tag closable>默认标签</el-tag>
    </div>

    <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" class="mainBreadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>

    <div class="mainContainer">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
  name:"Main",
  data(){
    return {
      
    }
  }
}
</script>

<style scoped>
.cdrdHeader{
  padding: 10px;
  box-shadow: 0 5px 10px #ddd;
}

.mainContainer{
  margin:10px;
  padding: 10px;
  border:solid 1px #E8E8E8;
  border-radius: 5px;
  height: 100%;
}

.mainBreadcrumb{
  padding: 15px;
}

</style>
