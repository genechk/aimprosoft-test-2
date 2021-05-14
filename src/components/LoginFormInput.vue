<template>
  <div class="form-row">
    <input
      @blur="onBlur"
      :name="name"
      :type="type"
      :placeholder="label"
      :aria-label="label"
    />
    <img class="input-icon" :src="icon" />
    <ValidationIcon :isValid="tempValid" v-if="showValidationIcon" />
    <Error v-if="!tempValid && !isPristine" :message="errorMessage" />
  </div>
</template>

<script>
import LoginFormInputError from './LoginFormInputError';
import LoginFormValidationIcon from './LoginFormValidationIcon';

export default {
  name: 'LoginFormInput',
  components: {
    Error: LoginFormInputError,
    ValidationIcon: LoginFormValidationIcon,
  },
  data() {
    return {
      isPristine: true,
      tempValid: true,
    };
  },
  props: {
    content: String,
    label: String,
    type: String,
    name: String,
    icon: String,
    validator: Function,
    isValid: Boolean,
    errorMessage: String,
  },
  methods: {
    onBlur(event) {
      this.isPristine = false;
      this.tempValid = this.validator(event);
    },
  },
  computed: {
    // Is it really necessary?
    showValidationIcon() {
      return !this.isPristine;
    },
  },
};
</script>

<style lang="scss" scoped>
$input-padding: 10px;
$input-padding-left: 40px;
$input-width: 294px;
$input-height: 40px;

input {
  border-radius: 5px;
  color: #666;
  font-size: 14px;
  background: #fff;
  border: 1px solid rgba(#999, 0.28);
  box-sizing: content-box;
  width: $input-width - $input-padding - $input-padding-left;
  height: $input-height - 2 * $input-padding;
  padding: $input-padding;
  padding-left: $input-padding-left;
  transition: border 500ms;

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid #999;
  }
}

.form-row {
  margin: 0;
  padding: 0;
  position: relative;
  display: flex;
  /* flex-direction: column; */
  justify-content: stretch;
  align-items: center;
  margin: 17px 35px;
}

.input-icon {
  position: absolute;
  left: 16px;
  width: 12px;
}
</style>
