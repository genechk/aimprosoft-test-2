<template>
  <Icon v-if="isValid" image="check" />
  <Icon v-else image="cross" />
</template>

<script>
import BaseIcon from './BaseIcon.vue';

export default {
  name: 'LoginFormValidationIcon',
  components: {
    Icon: BaseIcon,
  },
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
