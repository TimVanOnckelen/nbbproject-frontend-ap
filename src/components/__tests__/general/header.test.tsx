import React from 'react';
import { RouterProvider, createBrowserRouter, useNavigate } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Header from '../../general/header';

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

describe('Header component', () => {

  test('Verander de pagina wanneer er op een knop geklikt wordt', () => {
    const navigate = jest.fn();
    (useNavigate as jest.Mock).mockReturnValue(navigate);

    const { getByText } = render(<Header />);

    // Controleer Historie
    let button = getByText('Historie');
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith('/history');

    // Controleer Vergelijk
    button = getByText('Vergelijk');
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith('/');

    // Controleer Mijn profiel
    button = getByText('Mijn profiel');
    fireEvent.click(button);
    expect(navigate).toHaveBeenCalledWith('/profile');
  });
});