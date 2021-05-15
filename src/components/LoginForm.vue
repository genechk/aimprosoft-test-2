<template>
  <div class="container">
    <h1 class="form-header">
      Bank <span class="form-subhead">Support Portal</span>
    </h1>

    <form action="" class="form login-form">
      <Input
        v-bind="formFields.email"
        v-model:content="formFields.email.content"
        v-model:isPristine="formFields.email.isPristine"
        v-model:isValid="formFields.email.isValid"
      />
      <Input
        v-bind="formFields.password"
        v-model:content="formFields.password.content"
        v-model:isPristine="formFields.password.isPristine"
        v-model:isValid="formFields.password.isValid"
      />
      <Button :text="buttonText" @click="onSubmit" />
      <p class="form-message">
        Forgot your password? <a href="#">Reset it here.</a>
      </p>
    </form>
  </div>
</template>

<script>
import LoginFormInput from './LoginFormInput.vue';
import LoginFormButton from './LoginFormButton.vue';

const EMAIL_TEMPLATE = /^([a-z\d.-_]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/i;

export default {
  name: 'LoginForm',
  components: {
    Input: LoginFormInput,
    Button: LoginFormButton,
  },
  emits: {
    submit: ({ email, password }) => {
      // FixIt: Redundant, because both fields were already validated
      if (!email || !password) {
        return false;
      }
      return true;
    },
  },
  data() {
    return {
      formFields: {
        email: {
          content: '',
          label: 'E-mail',
          type: 'email',
          name: 'login-form-email',
          icon: 'user',
          validator: this.validateEmail,
          isPristine: true,
          isValid: false,
          errorMessage: 'Invalid Username',
        },
        password: {
          content: '',
          label: 'Password',
          type: 'password',
          name: 'login-form-password',
          icon: 'lock',
          validator: this.validatePassword,
          isPristine: true,
          isValid: false,
          errorMessage: 'Password can’t be empty',
        },
      },
      buttonText: 'Login',
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      const email = this.formFields.email.content;
      const password = this.formFields.password.content;
      const emailValid = this.validateEmail(email);
      const passwordValid = this.validatePassword(password);

      // Error displays when both isPristine and isValid are false
      this.formFields.email.isValid = emailValid;
      this.formFields.password.isValid = passwordValid;

      this.formFields.email.isPristine = false;
      this.formFields.password.isPristine = false;

      if (emailValid && passwordValid) {
        // Validation was successful, emitting an event with submitted data
        this.$emit('submit', { email, password });
      }
    },
    validateEmail(value) {
      return EMAIL_TEMPLATE.test(value);
    },
    // Just rejects blank fields
    validatePassword(value) {
      return !!(value.length && value.length > 0);
    },
  },
};
</script>

<style lang="scss">
@import '../styles/_variables.scss';
// FixIt: Duplicates variables.scss
$form-width: 440px;
$form-height: 311px;
$form-vertical-padding: 34px;
$form-horizontal-padding: 70px;

.login-form {
  width: $form-width - $form-horizontal-padding;
  height: $form-height - $form-vertical-padding;
  max-height: $form-height;
  padding: ($form-vertical-padding / 2) ($form-horizontal-padding / 2);
  border: 1px solid $color-form-border;
  border-radius: 5.51px;
  background: $color-background;
  padding-bottom: 0;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.form-message {
  padding: 0;
  margin: 0;
  line-height: 1;
  margin-left: 35px;
  margin-bottom: 17px;

  font: 12px $font-light;
  letter-spacing: -0.12px;

  a {
    color: $color-interactive;
    text-decoration: none;
  }
}

.container {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.form-header {
  margin-left: 70px;
  font: bold 41.36px $font-bold;
  color: $color-header;

  & .form-subhead {
    font: 18px $font-light;
    color: $color-primary;
  }
}
</style>
