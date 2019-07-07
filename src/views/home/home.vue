<template>
  <div>
    <el-container direction="vertical">
      <el-header>
        <vHeader></vHeader>
      </el-header>
      <el-container class="containerBox">
        <el-aside>
          <vAside></vAside>
        </el-aside>
        <el-main>
          <vMain></vMain>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import vHeader from '../../components/layou/header.vue'
import vAside from '../../components/layou/aside.vue'
import vMain from '../../components/layou/main.vue'

export default {
  name: 'Home',
  data () {
    return {}
  },
  components: {
    vHeader,
    vAside,
    vMain
  }
}
</script>

<style scoped>
.containerBox {
  height: 100%;
}
.el-container {
  height: 100%;
}

.el-header {
  background: #242f42;
}

.el-aside {

}

.el-main {
  background-color: #fff;
  padding: 0;
}
</style>
