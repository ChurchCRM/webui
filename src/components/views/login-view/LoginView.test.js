import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginView from './LoginView';

describe('<LoginView />', () => {
  test('it should mount', () => {
    render(<LoginView />);
    const linkElement = screen.getByText(/ChurchCRM/i);
    expect(linkElement).toBeInTheDocument();
  });
});