import React from "react";

import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Company from "../../company/company";
import { IHighestData } from "../../../models";

describe('Company component', () => {
    test('renders company information and financial data', () => {
        const highestData: IHighestData = {
            profit:100000,
            revenue:500000
        }

        const mockCompany = {
        enterpriseName: 'Test Company',
        address: {
          street: '123 Main St',
          number: '1',
          postalCode: '12345',
          city: 'Test City',
        },
        enterpriseNumber: '1234567890',
        financialData: {
          year: 2022,
          profit: 100000,
          revenue: 500000,
        },
      };

      render(<Company company={mockCompany} highestData={highestData} />);

      const companyName = screen.getByText('Test Company');
      const companyAddress = screen.getByText('123 Main St 1 12345 Test City');
      const enterpriseNumber = screen.getByText('BE1234567890');
      const yearCell = screen.getByText('2022');
      const profitCell = screen.getByText('100000');
      const revenueCell = screen.getByText('500000');

      expect(companyName).toBeInTheDocument();
      expect(companyAddress).toBeInTheDocument();
      expect(enterpriseNumber).toBeInTheDocument();
      expect(yearCell).toBeInTheDocument();
      expect(profitCell).toBeInTheDocument();
      expect(revenueCell).toBeInTheDocument();
    });
});