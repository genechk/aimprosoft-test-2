import { render, fireEvent } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import LoginForm from '../../src/components/LoginForm.vue';

describe('Login Form Component', () => {
  it('renders all text on the page', () => {
    const { getByText } = render(LoginForm);

    getByText('Bank');
    getByText('Support Portal');
    getByText('Login');
    getByText('Forgot your password?');
    getByText('Reset it here.');
  });

  it('renders a submit button', () => {
    const { getByRole } = render(LoginForm);
    getByRole('button');
  });

  it('renders input fields', () => {
    const { getByPlaceholderText } = render(LoginForm);
    getByPlaceholderText('E-mail');
    getByPlaceholderText('Password');
  });

  it('displays validation errors on empty inputs', async () => {
    const { getByPlaceholderText, getByText } = render(LoginForm);
    const email = getByPlaceholderText('E-mail');
    const password = getByPlaceholderText('Password');

    await fireEvent.blur(email);
    getByText('Invalid Username');

    await fireEvent.blur(password);
    getByText('Password can’t be empty');
  });

  it('removes errors when email is correct', async () => {
    const { getByPlaceholderText, queryByText, getByText } = render(LoginForm);
    const email = getByPlaceholderText('E-mail');

    // Wrong input
    await userEvent.type(email, 'sales');
    await fireEvent.blur(email);
    getByText('Invalid Username');

    // Correct input
    await userEvent.type(email, 'sales@legalizeweed.com');
    await fireEvent.blur(email);
    expect(queryByText('Invalid Username')).toBeNull();
  });

  it('removes errors when password isn’t empty', async () => {
    const { getByPlaceholderText, queryByText } = render(LoginForm);
    const password = getByPlaceholderText('Password');

    await userEvent.type(password, 'n');
    await fireEvent.blur(password);
    expect(queryByText('Password can’t be empty')).toBeNull();
  });

  it('triggers validation on both fields when button is pressed', async () => {
    const { getByText, getByRole } = render(LoginForm);

    const button = getByRole('button');
    await userEvent.click(button);

    getByText('Invalid Username');
    getByText('Password can’t be empty');
  });

  it('accepts valid inputs and submits form', async () => {
    const { getByPlaceholderText, queryByText, getByRole } = render(LoginForm);
    const password = getByPlaceholderText('Password');
    const email = getByPlaceholderText('E-mail');
    const button = getByRole('button');

    await userEvent.type(email, 'n.longbottom@hogwarts.com');
    await userEvent.type(password, 'qwerty1234');
    await userEvent.click(button);

    expect(queryByText('Invalid Username')).toBeNull();
    expect(queryByText('Password can’t be empty')).toBeNull();
  });
});
