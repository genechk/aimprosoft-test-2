<template>
  <img
    v-if="isValid"
    class="icon-success"
    src="https://icongr.am/entypo/check.svg?size=16&color=008a46"
  />
  <img
    v-else
    class="icon-failure"
    src="https://icongr.am/entypo/cross.svg?size=16&color=ed1f24"
  />
</template>

<script>
export default {
  name: 'LoginFormValidationIcon',
  props: {
    isValid: Boolean,
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 16px;
  height: 16px;
  position: absolute;
  right: -20px;
}
</style>
