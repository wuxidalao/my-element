<template>
  <div>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple">
          <div class="topLogo"><img src="../../images/logo.png" /></div>
        </div>
      </el-col>
      <el-col :span="18" align="right"><div class="grid-content bg-purple-light">
          <el-dropdown>
            <el-button type="primary">
              设置<i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
              <el-dropdown-item>双皮奶</el-dropdown-item>
              <el-dropdown-item>蚵仔煎</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div></el-col>
    </el-row>

  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
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
</style>
