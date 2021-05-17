<template>
  <div class="form-row">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseFormRow',
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.form-row {
  margin: ($form-vertical-padding / 2 + $border-position-adjustment)
    ($form-horizontal-padding / 2);
  padding: 0;
  padding-left: $border-position-adjustment / 2;

  position: relative;
  display: flex;
  justify-content: stretch;
  align-items: center;
}
</style>
