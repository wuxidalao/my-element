<template>
  <div>
     <el-breadcrumb separator-class="el-icon-arrow-right" separator="/" class="mainBreadcrumb">
        <el-breadcrumb-item
        v-for="(item,index) in breadList"
        :key="index"
        :to="{ path: item.path }"
      >{{item.title}}</el-breadcrumb-item>
      </el-breadcrumb>
  </div>
</template>

<script>
// const bus = require('../common/bus.js')

export default {
  data () {
    return {
      breadList: []
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  methods: {
    isHome (route) {
      return route.name === 'home'
    },
    getBreadcrumb () {
      let matched = this.$route.matched
      // 如果不是首页
      if (!this.isHome(matched[0])) {
        matched = [{ path: '/home', meta: { title: '首页' } }].concat(matched)
      }
      this.breadList = matched
    }
  },
  created () {
    this.getBreadcrumb()
  }
}
</script>

<style scoped>
.mainBreadcrumb{
  padding: 15px;
}
</style>
