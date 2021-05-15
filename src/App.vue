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
@import './styles/_variables.scss';
@import './styles/_fonts.scss';
@import './styles/_icons.scss';

#app {
  font-family: $font-regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $color-secondary;
  background: $color-background;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  overflow: hidden;
}
</style>
