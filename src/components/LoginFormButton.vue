<template>
  <button class="login-button" @click="handler($event)">{{ text }}</button>
</template>

<script>
export default {
  name: 'LoginFormButton',
  props: {
    text: String,
    handler: Function,
  },
};
</script>

<style lang="scss" scoped>
.login-button {
  display: block;
  height: 40px;
  width: 93px;
  background: #36a2c1;
  border: none;
  color: #ffffff;
  border-radius: 5px;
  padding: 10px 26px;
  line-height: 16px;
  letter-spacing: -0.1px;
  margin-top: 23px;
  margin-left: 35px;
  margin-bottom: 20px;
  font: 18px 'Helvetica Neue Light', Arial, sans-serif;
  transform: translateY(0);
  cursor: pointer;

  transition: all 200ms;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 2px 3px #2d7f96;
  }
}
</style>
