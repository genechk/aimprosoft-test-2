<template>
  <div class="icon" :class="`icon-${image}`"></div>
</template>

<script>
export default {
  name: 'BaseIcon',
  props: {
    image: {
      type: String,
      default: 'blank',
    },
  },
};
</script>

<style lang="scss" scoped>
$icon-font-size: 10px;
$icon-outer-size: 20px;

.icon {
  font-size: $icon-font-size;
  width: $icon-outer-size;
  height: $icon-outer-size;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
