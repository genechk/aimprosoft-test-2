<template>
  <form-row>
    <input
      @blur="onBlur"
      @input="onInput"
      :name="name"
      :type="type"
      :placeholder="label"
      :aria-label="label"
    />
    <Icon :image="icon" class="input-icon" />
    <ValidationIcon :isValid="isValid" v-if="!isPristine" />
    <Error v-if="!isValid && !isPristine" :message="errorMessage" />
  </form-row>
</template>

<script>
import BaseIcon from './BaseIcon.vue';
import BaseFormRow from './BaseFormRow.vue';
import LoginFormInputError from './LoginFormInputError.vue';
import LoginFormValidationIcon from './LoginFormValidationIcon.vue';

export default {
  name: 'LoginFormInput',
  emits: ['update:content', 'update:isPristine', 'update:isValid'],
  components: {
    Error: LoginFormInputError,
    ValidationIcon: LoginFormValidationIcon,
    Icon: BaseIcon,
    FormRow: BaseFormRow,
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

// FixIt: Dupllicates variables.scss
$input-padding: 10px;
$input-padding-left: 40px;
$input-width: 294px;
$input-height: 40px;

input {
  border-radius: 5px;
  color: $color-secondary;
  font-size: 14px;
  background: $color-background;
  border: 1px solid $color-input-border;

  // TODO: Check if necessary
  box-sizing: content-box;
  width: $input-width - $input-padding - $input-padding-left;
  height: $input-height - 2 * $input-padding;
  padding: $input-padding;
  padding-left: $input-padding-left;
  transition: border $duration-input;

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid $color-primary;
  }
}

.input-icon {
  position: absolute;
  left: 8px;
  color: $color-form-icons;
}
</style>
