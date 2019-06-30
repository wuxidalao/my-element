<template>
  <div class="asideBar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#354155"
      text-color="#c1cbd8"
      active-text-color="#4aa0f8">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
          <el-menu-item index="1-3">选项3</el-menu-item>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1-4-1</el-menu-item>
          <el-menu-item index="1-4-2">选项1-4-2</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1-4-1</el-menu-item>
          <el-menu-item index="2-4-2">选项1-4-2</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
          <el-menu-item index="3-1">选项1</el-menu-item>
          <el-menu-item index="3-2">选项2</el-menu-item>
          <el-menu-item index="3-3">选项3</el-menu-item>
        <el-submenu index="3-4">
          <template slot="title">选项4</template>
          <el-menu-item index="3-4-1">选项1-4-1</el-menu-item>
          <el-menu-item index="3-4-2">选项1-4-2</el-menu-item>
        </el-submenu>
      </el-submenu>

      <el-menu-item index="4">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>

export default {
  name:"Aside",
  data(){
    return {

    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
.asideBar {
  background-color: #354155;
  position: absolute;
  width: 250px;
  height: calc(100% - 60px);
  overflow-x: hidden;
}

.asideBar::-webkit-scrollbar {display:none}
</style>
