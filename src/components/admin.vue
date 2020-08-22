<!-- 登录组件 -->
<template>
  <div class='admin'>
    <el-form>
      <el-form-item>
        <el-input prefix-icon='el-icon-user' v-model="userName"></el-input>
        <el-input type='password' v-model="uPassword" prefix-icon='el-icon-lock'></el-input>
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
