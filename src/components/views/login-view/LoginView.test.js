import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LoginView from './LoginView';

describe('<LoginView />', () => {
  test('it should mount and have this words above', () => {
    render(<LoginView />);
    const Church = screen.getByText(/Church/i);
    const CRM = screen.getByText(/CRM/i);
    const subtitle = screen.getByText(/Please login/i);

    expect(Church).toBeInTheDocument();
    expect(CRM).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });
});