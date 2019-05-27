<template>
  <div class="login-container" :style="height">
    <el-form
      :model="ruleForm2"
      :rules="rules2"
      status-icon
      ref="ruleForm2"
      label-position="left"
      label-width="0px"
      class="demo-ruleForm login-page">
      <img class="logo" src="../images/logo.png" alt="">
      <h3 class="title">信息系统</h3>
      <el-form-item prop="username">
        <el-input type="text" v-model="ruleForm2.username" auto-complete="off" prefix-icon="el-icon-user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" v-model="ruleForm2.password" auto-complete="off" prefix-icon="el-icon-lock" placeholder="密码"></el-input>
      </el-form-item>
      <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      logining: false,
      ruleForm2: {
        username: 'admin',
        password: '123456'
      },
      rules2: {
        username: [
          {
            required: true,
            message: 'please enter your account',
            trigger: 'blur'
          }
        ],
        password: [
          { required: true, message: 'enter your password', trigger: 'blur' }
        ]
      },
      checked: false,
      height: {
        height: ''
      }
    }
  },
  created () {
    this.hh()
  },
  methods: {
    handleSubmit (event) {
      this.$refs.ruleForm2.validate(valid => {
        if (valid) {
          this.logining = true
          if (
            this.ruleForm2.username === 'admin' &&
            this.ruleForm2.password === '123456'
          ) {
            this.logining = false
            sessionStorage.setItem('user', this.ruleForm2.username)
            this.$router.push({ path: '/' })
          } else {
            this.logining = false
            this.$alert('username or password wrong!', 'info', {
              confirmButtonText: 'ok'
            })
          }
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    hh () {
      this.height.height = window.innerHeight + 'px'
    }
  }
}
</script>

<style scoped>
.logo{
  width: 120px;
  height: 50px;
}

.title{
  text-align: center;
  margin-bottom: 15px;
}
.login-container {
  width: 100%;
  height: 100%;
  /* background-color: rgb(84, 92, 100); */
  background: url(../images/loginBj.jpeg) no-repeat center center;
  background-size:100% 100%;
  position: relative; 
}
.login-page {
  -webkit-border-radius: 5px;
  border-radius: 5px;
  width: 350px;
  padding: 35px 35px 15px;
  background-color: rgba(84, 92, 100 ,0.2);
  border: 1px solid #eaeaea;
  box-shadow: 0 0 20px #eaeaea;
  margin: 0 auto;
  position: absolute; 
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
label.el-checkbox.rememberme {
  margin: 0px 0px 15px;
  text-align: left;
  color:black;
}
</style>
