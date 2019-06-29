<template>
  <div>
    <div class="v-cdrdHeader">
      <el-tag closable="true" disable-transitions="true">默认标签</el-tag>
      <el-tag closable>默认标签</el-tag>
      <el-tag closable>默认标签</el-tag>
    </div>

    <!-- 面包屑 -->
      <el-breadcrumb separator-class="el-icon-arrow-right" class="v-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>

    <div class="v-container">
      <div class="v-pluginsTips">22222</div>


      <template>
        <el-alert
          title="成功提示的文案"
          type="success">
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info">
        </el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning">
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error">
        </el-alert>
      </template>




    </div>
    
  </div>
</template>

<script>

</script>

<style scoped>
.v-cdrdHeader{
  padding: 10px;
  box-shadow: 0 5px 10px #ddd;
}

.v-container{
  margin:10px;
  padding: 10px;
  border:solid 1px #E8E8E8;
  border-radius: 5px;
  height: 100%;
}

.v-breadcrumb{
  padding: 15px;
}

.v-pluginsTips{
  background: #eef1f6;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
}



</style>
