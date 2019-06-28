<template>
  <div>
    <el-container direction="vertical">
      <el-header><vHeader></vHeader></el-header>
      <el-container >
        <el-aside width="200px" class="leftContainer"><vAside></vAside></el-aside>
        <el-main class="contentContainer"><vMain></vMain></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vHeader from './header.vue'
import vAside from './aside.vue'
import vMain from './main.vue'

export default {
  name: 'index',
  components: {
    vHeader,
    vAside,
    vMain
  },
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.topLogo>img{
  width: 120px;
  height: 50px;
  margin-top:5px;
}
.el-header {
 background: #242f42;
}

.el-aside {
  background-color: rgb(50, 65, 87);
}

.el-main {
  background-color: #333;
}
</style>
