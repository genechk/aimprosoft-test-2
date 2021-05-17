<template>
  <p class="error-message">{{ message }}</p>
</template>

<script>
export default {
  name: 'LoginFormInputError',
  props: {
    message: String,
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.error-message {
  width: 100%;
  margin: 0;
  margin-top: 5px;
  padding: 0;
  padding-left: 3px;
  letter-spacing: -0.18px;
  position: absolute;
  bottom: -17px;
  color: $color-failure;
  text-align: left;
  font: 11px $font-regular;

  opacity: 1;
  transition: opacity $duration-input;
}
</style>
