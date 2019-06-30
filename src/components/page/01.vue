<template>
  <div>
     <div class="v-pluginsTips">333</div>
      <template>
        <el-alert
          title="成功提示的文案"
          type="success">
        </el-alert>
        <el-alert
          title="消息提示的文案"
          type="info">
        </el-alert>
        <el-alert
          title="警告提示的文案"
          type="warning">
        </el-alert>
        <el-alert
          title="错误提示的文案"
          type="error">
        </el-alert>
      </template>
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
.v-pluginsTips{
  background: #eef1f6;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 3px;
}
</style>
