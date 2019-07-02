<template>
  <div>
    <div class="cdrdHeader">
      <el-tag closable>默认标签</el-tag>
      <el-tag closable>默认标签</el-tag>
      <el-tag closable>默认标签</el-tag>
    </div>

    <!-- 面包屑 -->
    <vBreadcrumb></vBreadcrumb>  

    <div class="mainContainer">
      <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
import vBreadcrumb from '../page/breadcrumb.vue'

export default {
  name:"Main",
  data(){
    return {
      
    }
  },
  components:{
    vBreadcrumb
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



</style>
