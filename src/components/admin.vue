<!-- 登录组件 -->
<template>
  <div class='admin'>
    <el-form label-width="0">
      <el-form-item>
        <el-input prefix-icon='el-icon-user' v-model="userName" placeholder="用户名/邮箱/手机号"></el-input>
        <el-input type='password' v-model="uPassword" prefix-icon='el-icon-lock' placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">登录</el-button>
        <el-button type="primary">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>

export default {
  data () {
    return {
      userName: '',
      uPassword: ''
    }
  },

  computed: {},

  watch: {},

  methods: {

  }
}
</script>

<style scoped>
.admin {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
</style>
