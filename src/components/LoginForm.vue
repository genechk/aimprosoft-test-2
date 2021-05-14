<template>
  <form action="" class="form login-form">
    <Input v-bind="formFields.email" />
    <Input v-bind="formFields.password" />
    <Button :text="buttonText" :handler="submitHandler" />
    <p class="form-message">
      Forgot your password? <a href="#"> Reset it here.</a>
    </p>
  </form>
  <!-- </div> -->
</template>

<script>
import LoginFormInput from './LoginFormInput';
import LoginFormButton from './LoginFormButton';
export default {
  name: 'LoginForm',
  components: {
    Input: LoginFormInput,
    Button: LoginFormButton,
  },
  data() {
    return {
      formFields: {
        email: {
          content: '',
          label: 'E-mail',
          type: 'email',
          name: 'login-form-email',
          icon: 'https://icongr.am/entypo/user.svg?size=16&color=999999',
          validator(event) {
            // console.log("Email blured", event);
            return false;
          },
          isValid: false,
          errorMessage: 'Invalid Username',
        },
        password: {
          content: '',
          label: 'Password',
          type: 'password',
          name: 'login-form-password',
          icon: 'https://icongr.am/entypo/lock.svg?size=16&color=7d7d7d',
          validator(event) {
            return true;
          },
          isValid: false,
          errorMessage: 'Invalid Password',
        },
      },
      buttonText: 'Login',
    };
  },
  methods: {
    submitHandler(event) {
      event.preventDefault();

      const formValid =
        this.formFields.email.isValid && this.formFields.password.isValid;

      if (!formValid) {
        console.log('Better luck next time');
        return;
      }

      console.log('Email: ', this.formFields.email.content);
      console.log('Password: ', this.formFields.password.content);
    },
  },
};
</script>

<style lang="scss">
$form-width: 440px;
$form-height: 311px;
$form-vertical-padding: 34px;
$form-horizontal-padding: 70px;

$color-primary: #999;
$color-highlight: #36a2c1;

.login-form {
  width: $form-width - $form-horizontal-padding;
  height: $form-height - $form-vertical-padding;
  max-height: $form-height;
  padding: ($form-vertical-padding / 2) ($form-horizontal-padding / 2);
  border: 1px solid rgba(#999, 0.33);
  border-radius: 5.51px;
  background: #fff;
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

  font: 12px 'Helvetica Neue Light', Helvetica, Arial, sans-serif;
  letter-spacing: -0.12px;

  a {
    color: $color-highlight;
    text-decoration: none;
  }
}
</style>
