<template>
  <form-row>
    <FormInput
      @blur="onBlur"
      @input="onInput"
      :name="name"
      :type="type"
      :placeholder="label"
      :aria-label="label"
      :class="isValid ? 'success' : 'error'"
      class="form-input"
    />
    <InputIcon :image="icon" class="form-input-icon" />
    <ValidationIcon
      :isValid="isValid"
      v-if="!isPristine"
      class="form-validation-icon"
    />
    <Error v-if="!isValid && !isPristine" :message="errorMessage" />
  </form-row>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import BaseFormRow from './BaseFormRow.vue';
import BaseFormInput from './BaseFormInput.vue';
import LoginFormInputError from './LoginFormInputError.vue';
import LoginFormValidationIcon from './LoginFormValidationIcon.vue';

export default {
  name: 'LoginFormInput',
  emits: ['update:content', 'update:isPristine', 'update:isValid'],
  components: {
    Error: LoginFormInputError,
    ValidationIcon: LoginFormValidationIcon,
    InputIcon: BaseIcon,
    FormRow: BaseFormRow,
    FormInput: BaseFormInput,
  },
  props: {
    content: String,
    label: String,
    type: String,
    name: String,
    icon: String,
    validator: Function,
    isPristine: Boolean,
    isValid: Boolean,
    errorMessage: String,
  },
  methods: {
    onInput({ target }) {
      this.$emit('update:content', target.value);
      this.$emit('update:isValid', this.validator(target.value));
    },
    onBlur({ target }) {
      this.$emit('update:content', target.value);
      this.$emit('update:isValid', this.validator(target.value));
      this.$emit('update:isPristine', false);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../styles/_variables.scss';

.form-input {
  padding-left: $input-padding-left;
}

.success {
  &,
  &:hover,
  &:focus {
    border: 1px solid $color-success-input-border;
  }
}

.form-input-icon {
  position: absolute;
  left: 14px;
  color: $color-form-icons;
  opacity: 0.5;
  font-size: 12px;

  // FixIt: Dirty hack to avoid adjusting icon sizes in webfont
  &.icon-lock {
    font-size: 13px;
    margin-top: -3px;
  }
}

.form-validation-icon {
  margin-left: 3px;

  // Another dirty hack, but here it’s probably an issue with mockup
  &.icon-check {
    margin-top: 2px;
    margin-left: 7px;
  }
}
</style>
