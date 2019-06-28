<template>
  <div>
    <!-- <div class="topLogo"><img src="../../images/logo.png" /></div> -->
    <div class="submenu">
      <el-menu
      :default-active="activeIndex1"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="rgba（0,0,0,0）"
      text-color="#000"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">我的工作台</template>
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </el-submenu>
    </el-menu>
    </div>

    <!-- <el-avatar :size="50" :src="circleUrl"></el-avatar> -->
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
.submenu{
  width: 100px;
}

.topLogo>img{
  width: 120px;
  height: 50px;
  margin-top:5px;
}
</style>
