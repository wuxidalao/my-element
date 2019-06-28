<template>
  <div>
    <el-container>
      <el-header class="topContainer">
        <div class="topLogo"><img src="../../images/logo.png" /></div>
        <div class="topNav"><header></header></div>
      </el-header>
      <el-container>
        <el-aside width="200px" class="leftContainer"><aside></aside></el-aside>
        <el-main class="contentContainer"><main></main></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import header from './header'
import aside from './aside'
import main from './main'

export default {
  name: 'index',
  components: {
    header,
    aside,
    main
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

</style>
