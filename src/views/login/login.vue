<template>
  <div class="login">
    <div class="container">
      <div class="left"></div>
      <div class="right">
        <LoginForm />
      </div>
    </div>
 </div>
</template>

<script setup lang='ts'>
  import LoginForm from './components/LoginForm.vue'
  import { ref,reactive } from 'vue'

</script>
<style scoped>
.login {
  position: relative;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
}
.login::before {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-left: -48%;
  background-image: url('@/assets/svg/login-bg.svg');
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: auto 100%;
  content: '';
}
.login .container {
  position: relative;
  max-width: 1600px;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
}
.login .container > div {
  width: 50%;
  height: 100%;
}
</style>