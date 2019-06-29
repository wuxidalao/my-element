<template>
  <div class="v-container">
    <div class="v-left">
      <div class="v-logo"><img src="../../images/logo.png" /></div>
      <p class="v-name">管理系统</p>
    </div>
    <div class="v-right">
      <!-- 设置 -->
      <div class="grid-content bg-purple-light v-setUp">
        <el-dropdown>
          <txt type="primary">
            admin<i class="el-icon-arrow-down el-icon--right"></i>
          </txt>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>系统首页</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <!-- 头像 -->
      <div class="v-HeadPortrait"><img src="../../images/tx.png" /></div>
      <!-- 消息 -->
      <div class="v-bell">
        <div class="v-bellTips"></div>
        <el-tooltip class="item" effect="dark" content="您有1条未读消息" placement="bottom">
          <i class="el-icon-bell"></i>
        </el-tooltip>
      </div>
      <!-- 全屏 -->
      <div class="v-fullScreen" @click="handleFullScreen">
        <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>

<script>
const  {handleFullScreen} =require('../../lib/help.js')

export default {
  data(){
    return {
      fullscreen: false
    }
  },
  methods:{
    handleFullScreen(){
      handleFullScreen()
    }
  }
}
</script>

<style scoped>
.v-container{
  display: flex;
  justify-content: space-between;
  height: 60px;
}

.v-left{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.v-right{
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
}

.v-name{
  color: #fff;
}

.v-logo>img{
  width: 40px;
  height: 30px;
}

.v-setUp{
  margin-left: 10px;
}

.v-HeadPortrait>img{
  width: 40px;
  height: 40px;
  border-radius: 50%;
}

.v-bell{
  color: aliceblue;
  font-size: 24px;
  margin-right: 15px;
  position: relative;
}

.v-bellTips{
  display:block;
	background:#f00;
	border-radius:50%;
	width:8px;
	height:8px;
	top:0px;
	right:0px;
	position:absolute;
}

.v-fullScreen{
  color: aliceblue;
  font-size: 24px;
  margin-right: 10px;
  position: relative;
}
</style>
