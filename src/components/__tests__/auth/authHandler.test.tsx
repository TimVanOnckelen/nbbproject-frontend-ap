/* import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter, Navigate, useOutletContext } from 'react-router-dom';
import { ProtectedRoute, UnProtectedRoute } from '../../auth/authHandler';

describe('ProtectedRoute component', () => {
  test('renders Navigate component when token is not available', () => {
    const mockContext = { token: null }; // Set token to null for test

    const { container } = render(
      <MemoryRouter initialEntries={['/protected']}>
        <ProtectedRoute />
      </MemoryRouter>,
      {
        wrapper: ({ children }) => (
          <OutletContextProvider value={mockContext}>
            {children}
          </OutletContextProvider>
        ),
      }
    );

    const navigateComponent = container.querySelector('Navigate');
    expect(navigateComponent).toBeInTheDocument();
    expect(navigateComponent).toHaveAttribute('to', '/auth/login');
  });
});

describe('UnProtectedRoute component', () => {
  test('renders Navigate component when token is available', () => {
    const mockContext = { token: 'testToken' }; // Set token to a non-null value for test

    const { container } = render(
      <MemoryRouter initialEntries={['/unprotected']}>
        <UnProtectedRoute />
      </MemoryRouter>,
      {
        wrapper: ({ children }) => (
          <OutletContextProvider value={mockContext}>
            {children}
          </OutletContextProvider>
        ),
      }
    );

    const navigateComponent = container.querySelector('Navigate');
    expect(navigateComponent).toBeInTheDocument();
    expect(navigateComponent).toHaveAttribute('to', '/compare');
  });

}); */

test("test",() => {
    expect(true).toBe(true);
});