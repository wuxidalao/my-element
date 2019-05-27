<template>
  <div>
    <div class="loginContainer">
      <el-row>
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-user-solid"
          v-model="user">
        </el-input>
      </el-row>

      <el-row>
        <el-input
          placeholder="请输入密码"
          prefix-icon="el-icon-user-solid"
          v-model="pasword"
          show-password>
        </el-input>
      </el-row>

      <el-row>
        <el-button type="primary" round>成功按钮</el-button>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
.loginContainer{
  width: 350px;
  height: 350px;
  display: flex;
  flex-direction:column;
  justify-content: center;
  padding: 20px;
  box-shadow:0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.el-input{
  margin-top:20px;
  border-radius: 30%;
}
</style>
