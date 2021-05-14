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
.error-message {
  width: 100%;
  margin: 0;
  padding: 0;
  margin-top: 5px;
  position: absolute;
  bottom: -17px;
  color: #ed1f24;
  text-align: left;
  font: 11px 'Helvetica Neue Regular', Helvetica, Arial, sans-serif;

  opacity: 1;
  transition: opacity 500ms;
}
</style>
