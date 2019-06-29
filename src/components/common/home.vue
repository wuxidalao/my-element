<template>
  <div>
    <el-container direction="vertical">
      <el-header><vHeader></vHeader></el-header>
      <el-container>
        <el-aside width="201px"><vAside></vAside></el-aside>
        <el-main><vMain></vMain></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vHeader from './header.vue'
import vAside from './aside.vue'
import vMain from './main.vue'

export default {
  components: {
    vHeader,
    vAside,
    vMain
  }
}
</script>

<style scoped>
.el-container{
  height:100%;
  
}

.el-header {
 background: #242f42;
}

.el-aside {
  background-color: #354155;
  max-height:100vh;
}

.el-main {
  background-color: #fff;
  padding: 0;
}

</style>
