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
@import '../styles/_variables.scss';
.login-button {
  margin-top: ($form-vertical-padding / 2 + 1px);
  margin-left: ($form-horizontal-padding / 2 + $border-position-adjustment);
  margin-bottom: $buttom-margin-bottom;
}
</style>
