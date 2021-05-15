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
.form-row {
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  justify-content: stretch;
  align-items: center;
  margin: 17px 35px;
}
</style>
