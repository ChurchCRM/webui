import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ForgotPasswordView from './ForgotPasswordView';

describe('<ForgotPasswordView />', () => {
  test('it should mount', () => {
    render(<ForgotPasswordView />);
    const Forgot = screen.getByText(/Forgot/i);
    expect(Forgot).toBeInTheDocument();
  });
});