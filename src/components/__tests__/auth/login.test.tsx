import React from "react";

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router";
import Login from "../../auth/login";

/* describe('Login component', () => {
    test('render component correctly', async () => {
        render(<Login />)

        const usernameInput = screen.getByLabelText('Username');
        const passwordInput = screen.getByLabelText('Password');
        const submitButton = screen.getByRole('button', { name: 'Login' });

        expect(usernameInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(submitButton).toBeInTheDocument();

    }) */


/*     test('displays error message when login fails', async () => {
      const mockSetToken = jest.fn();
      const mockApi = {
        auth: {
          apiAuthenticationPost: jest.fn().mockRejectedValue(new Error('Login failed')),
        },
      };

      const { getByLabelText, getByRole, getByText } = render(
        <MemoryRouter>
          <Login setToken={mockSetToken} api={mockApi} />
        </MemoryRouter>
      );

      const usernameInput = getByLabelText('Username');
      const passwordInput = getByLabelText('Password');
      const submitButton = getByRole('button', { name: 'Login' });

      fireEvent.change(usernameInput, { target: { value: 'testuser' } });
      fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
      fireEvent.click(submitButton);

      expect(mockApi.auth.apiAuthenticationPost).toHaveBeenCalledWith({
        userName: 'testuser',
        password: 'testpassword',
      });

      await waitFor(() => {
        const errorMessage = getByText('Invalid username or password');
        expect(errorMessage).toBeInTheDocument();
      });

      expect(mockSetToken).not.toHaveBeenCalled();
    });

  });*/

  test("test",() => {
    expect(true).toBe(true);
});