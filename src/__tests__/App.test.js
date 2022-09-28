import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Registration from '../components/pages/Registration';
import Login from '../components/pages/Login';

describe('Test case for testing login', () => {
  test('should render login component', () => {
    render(
      <Router>
        <Login />
      </Router>,
    );
    expect(screen.getByText('Sign in')).toBeInTheDocument();
  });

  test('email check', () => {
    const utils = render(<Router><Login /></Router>);
    const input = utils.getByLabelText('email-input');
    fireEvent.change(input, { target: { name: 'email', value: 'roland@test.com' } });
    expect(input.value).toBe('roland@test.com');
  });

  test('password check', () => {
    const utils = render(<Router><Login /></Router>);
    const input = utils.getByLabelText('password-input');
    fireEvent.change(input, { target: { name: 'password', value: '123456789' } });
    expect(input.value).toBe('123456789');
  });
});

describe('Test case for testing sign up', () => {
  test('should render login component', () => {
    render(
      <Router>
        <Registration />
      </Router>,
    );
    expect(screen.getByText('Sign up')).toBeInTheDocument();
  });

  test('name check', () => {
    const utils = render(<Router><Registration /></Router>);
    const input = utils.getByLabelText('name-input');
    fireEvent.change(input, { target: { name: 'email', value: 'roland' } });
    expect(input.value).toBe('roland');
  });

  test('email check', () => {
    const utils = render(<Router><Registration /></Router>);
    const input = utils.getByLabelText('email-input');
    fireEvent.change(input, { target: { name: 'email', value: 'roland@test.com' } });
    expect(input.value).toBe('roland@test.com');
  });

  test('password check', () => {
    const utils = render(<Router><Registration /></Router>);
    const input = utils.getByLabelText('password-input');
    fireEvent.change(input, { target: { name: 'password', value: '123456789' } });
    expect(input.value).toBe('123456789');
  });

  test('confirm password check', () => {
    const utils = render(<Router><Registration /></Router>);
    const input = utils.getByLabelText('confirm-password-input');
    fireEvent.change(input, { target: { name: 'password', value: '123456789' } });
    expect(input.value).toBe('123456789');
  });
});
