<template>
  <input />
</template>

<script>
export default {
  name: 'BaseFormInput',
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';
$input-height: $form-element-height;

input {
  border-radius: 5px;
  color: $color-secondary;
  font-size: 14px;
  letter-spacing: -0.18px;
  background: $color-background;
  border: 1px solid $color-input-border;
  width: $input-width - $input-padding - $input-padding-left;
  height: $input-height - 2 * $input-padding;
  padding: $input-padding;
  transition: border $duration-input;

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid $color-primary;
  }
}
</style>
