<template>
  <LoginForm />
</template>

<script>
import LoginForm from './components/LoginForm.vue';

export default {
  name: 'App',
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss">
// Normalize SCSS (MIT)
@import '../node_modules/normalize-scss/sass/normalize';

// Global app styles
@import './styles/_variables.scss';
@import './styles/_fonts.scss';
@import './styles/_icons.scss';

html,
body {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

#app {
  font-family: $font-regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-secondary;
  background: $color-background;
  display: flex;
  justify-content: center;
  height: 100%;
  padding-top: 130px;
  width: 100%;
  overflow: hidden;
}
</style>
