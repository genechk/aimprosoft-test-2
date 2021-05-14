<template>
  <div class="container">
    <h1 class="form-header">
      Bank <span class="form-subhead">Support Portal</span>
    </h1>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from './components/LoginForm.vue';
export default {
  name: 'App',
  components: {
    LoginForm: LoginForm,
  },
};
</script>

<style lang="scss">
#app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #666666;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-header {
  margin-left: 70px;
  font: bold 41.36px 'Helvetica Neue Bold', Helvetica, Arial, sans-serif;
  color: #2fa2c3;

  & .form-subhead {
    font: 18px 'Helvetica Neue Light', Helvetica, Arial, sans-serif;
    color: #999;
  }
}
</style>
