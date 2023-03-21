import React from 'react';
import { render, screen } from '@testing-library/react';
import { SearchPage }  from '../search';

// Test App Component
test('renders Search component', () => {
    render(<SearchPage />);
    const divElement = screen.getByRole("searchDiv");
    expect(divElement).toHaveTextContent("Dit is een zoek pagina");
    expect(divElement).toHaveAttribute("role","searchDiv");
})

// Basis test. Altijd PASS
test("test",() => {
    expect(true).toBe(true);
});