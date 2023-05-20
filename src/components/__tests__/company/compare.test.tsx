import React from "react";
import { initReactI18next, useTranslation } from 'react-i18next';

import { render, fireEvent, waitFor, screen } from '@testing-library/react';

import Compare from "../../company/compare";

test("De state van textvakken wordt goed bijgehouden", () => {
    render(<Compare />);
    const company1Input = screen.getByLabelText('common.company 1');
    const company2Input = screen.getByLabelText('common.company 2');
    const compareButton = screen.getByText('common.compare');

    expect(company1Input).toBeInTheDocument();
    expect(company2Input).toBeInTheDocument();
    expect(compareButton).toBeInTheDocument();
  });

// test('Toon loading spinner wanneer bedrijfsdata wordt geladen', async () => {
//   render(<Compare />);

//   const company1Input = screen.getByLabelText('common.company 1');
//   const company2Input = screen.getByLabelText('common.company 2');
//   const compareButton = screen.getByText('common.compare');

//   fireEvent.change(company1Input, { target: { value: '123456789' } });
//   fireEvent.change(company2Input, { target: { value: '987654321' } });
//   fireEvent.click(compareButton);

//   const loadingSpinner = screen.getByRole('progressbar');

//   expect(loadingSpinner).toBeInTheDocument();

//   await waitFor(() => {
//     const loadingSpinner = screen.queryByRole('progressbar');
//     expect(loadingSpinner).toBeNull();
//   });
// })
