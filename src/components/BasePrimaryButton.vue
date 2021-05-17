<template>
  <button><slot></slot></button>
</template>

<script>
export default {
  name: 'BasePrimaryButton',
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

$button-height: $form-element-height;

button {
  display: block;
  height: $button-height;
  padding: $button-padding-y $button-padding-x;

  font: $button-font-size $font-light;
  color: $color-button-text;
  letter-spacing: $button-letter-spacing;
  line-height: $button-font-size;

  background: $color-interactive;
  box-shadow: none;
  border: none;
  border-radius: $button-border-radius;
  cursor: pointer;

  transform: translateY(0);
  transition: all $duration-button;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 2px 3px $color-button-shadow;
  }

  &:focus {
    transform: translateY(0);
    box-shadow: none;
  }
}
</style>
