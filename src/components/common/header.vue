<template>
  <div class="headerContainer">
    <div class="headerLeft">
      <!-- <div class="logo"><img src="../../images/logo.png" /></div> -->
      <!-- 折叠 -->
      <div class="collapse-btn" @click="collapseChage">
        <i class="el-icon-menu"></i>
      </div>
      <p class="headerName">管理系统</p>
    </div>
    <div class="headerRight">
      <!-- 设置 -->
      <div class="grid-content bg-purple-light headerSetUp">
        <el-dropdown>
          <div type="primary">
            admin<i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>系统首页</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- 头像 -->
      <div class="headPortrait"><img src="../../images/tx.png" /></div>
      <!-- 消息 -->
      <div class="headerBell">
        <div class="headerBellTips"></div>
        <el-tooltip class="item" effect="dark" content="您有1条未读消息" placement="bottom">
          <i class="el-icon-bell"></i>
        </el-tooltip>
      </div>
      <!-- 全屏 -->
      <div class="headerFullScreen" @click="handleFullScreen">
        <el-tooltip class="item" effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
const {HandleFullScreen} = require('../../lib/help.js')

export default {
  name: 'Header',
  data () {
    return {
      fullscreen: false,
      collapse: false
    }
  },
  methods: {
    // 全屏
    handleFullScreen () {
      HandleFullScreen()
    },
    // 折叠菜单
    collapseChage () {
      this.collapse = !this.collapse
      this.$bus.emit('collapse', this.collapse)
    }
  },
  mounted () {
    if (document.body.clientWidth < 1500) {
      this.collapseChage()
    }
  }
}
</script>

<style scoped>
.headerContainer{
  display: flex;
  justify-content: space-between;
  height: 60px;
}

.headerLeft{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.headerRight{
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
}

.collapse-btn{
  margin-right: 15px;
  font-size: 30px;
  color: lightblue;
}

.headerName{
  color: #fff;
}

.logo>img{
  width: 40px;
  height: 30px;
}

.headerSetUp{
  margin-left: 10px;
}

.headPortrait>img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.headerBell{
  color: aliceblue;
  font-size: 24px;
  margin-right: 15px;
  position: relative;
}

.headerBellTips{
  display:block;
	background:#f00;
	border-radius:50%;
	width:8px;
	height:8px;
	top:0px;
	right:0px;
	position:absolute;
}

.headerFullScreen{
  color: aliceblue;
  font-size: 24px;
  margin-right: 10px;
  position: relative;
}
</style>
