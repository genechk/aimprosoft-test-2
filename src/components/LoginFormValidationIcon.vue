<template>
  <div v-if="isValid" class="icon-check"></div>
  <div v-else class="icon-cross"></div>
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
@import '../styles/variables';

.icon-check {
  color: $color-success-icon;
}

.icon-cross {
  color: $color-failure;
}
</style>
