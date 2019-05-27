<template>
  <div>
    <el-container>
      <el-header class="topContainer">
        <div class="topLogo"><img src="../images/logo.png" /></div>
        <div class="topNav"><top></top></div>
      </el-header>
      <el-container :style="height">
        <el-aside width="200px" class="leftContainer"><left></left></el-aside>
        <el-container>
          <el-main class="contentContainer">
            <breadcrumb></breadcrumb>
            <tab></tab>
          </el-main>
          <el-footer class="bottomContainer"><bottom></bottom></el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import top from './top'
import left from './left'
import breadcrumb from './breadcrumb'
import tab from './tab'
import bottom from './bottom'

export default {
  name: 'index',
  components: {
    'top': top,
    'left': left,
    'breadcrumb': breadcrumb,
    'tab': tab,
    'bottom': bottom
  },
  data () {
    return {
      height: {
        height: ''
      }
    }
  },
  created () {
    this.hh()
  },
  methods: {
    hh () {
      this.height.height = window.innerHeight - 60 + 'px'
    }
  }
}
</script>

<style scoped>
.topContainer{
  background-color: rgb(84, 92, 100);
  display: flex;
  justify-content:space-between;
}

.topLogo>img{
  width: 120px;
  height: 50px;
  margin-top:5px;
}

.leftContainer{

}

.bottomContainer{
  display: flex;
  justify-content:center;
  align-items: center;
  background-color: rgb(245, 245, 245);
}
</style>
