<!-- 登录页面 -->
<template>
  <div class='login'>
    <div class="login-logo">
      <img src="../assets/logo.png" alt="">
    </div>
    <admin class="admin"></admin>
  </div>
</template>

<script>
import admin from '../components/admin'

export default {
  components: {
    admin
  },
  data () {
    return {

    }
  },

  computed: {},

  watch: {},

  methods: {

  }
}
</script>

<style lang='scss'>
.login {
  position: relative;
  width: 500px;
  height: 300px;
  margin: 100px auto;
  border: 1px solid rgb(156, 136, 136);
  box-shadow: 0 0 5px rgb(75, 73, 73);
  .login-logo {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
    height: 150px;
    width: 150px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0 0 3px #aaa;
    img {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      width: 100px;
      border-radius: 50%;
      box-shadow: 0 0 5px rgba($color: #000000, $alpha: 0.1);
    }
  }
  .admin {
    margin-top: 100px;
  }
}
</style>
