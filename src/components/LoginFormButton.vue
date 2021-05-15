<template>
  <primary-button class="login-button">
    {{ text }}
  </primary-button>
</template>

<script>
import BasePrimaryButton from './BasePrimaryButton.vue';

export default {
  name: 'LoginFormButton',
  components: {
    PrimaryButton: BasePrimaryButton,
  },
  props: {
    text: String,
  },
};
</script>

<style lang="scss" scoped>
.login-button {
  margin-top: 23px;
  margin-left: 35px;
  margin-bottom: 20px;
}
</style>
