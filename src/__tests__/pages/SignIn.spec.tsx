import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import SignIn from '../../pages/SignIn';

const mockedHistoryPush = jest.fn();

jest.mock('react-router-dom', () => {
  return {
    useHistory: () => ({
      push: mockedHistoryPush,
    }),
    Link: ({ children }: { children: React.ReactNode }) => children,
  };
});

jest.mock('../../hooks/auth', () => {
  return {
    useAuth: () => ({
      signIn: jest.fn(),
    }),
  };
});

describe('SignIn page', () => {
  it('should be able to sign in', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const nameField = getByPlaceholderText(
      'Type your first and last names to sign in',
    );
    const buttonElement = getByText('Sign In');

    fireEvent.change(nameField, { target: { value: 'John Doe' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should not be able to sign in with no value in input', async () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    const nameField = getByPlaceholderText(
      'Type your first and last names to sign in',
    );
    const buttonElement = getByText('Sign In');

    fireEvent.change(nameField, { target: { value: '' } });
    fireEvent.click(buttonElement);

    await waitFor(() => {
      expect(mockedHistoryPush).not.toHaveBeenCalled();
    });
  });
});
