import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LangChanger from '../../general/langChanger';

describe('LangChanger component', () => {
    test('renders language options and updates language on click', () => {
      render(<LangChanger />);

      const selectedLang = screen.getByText('en');
      expect(selectedLang).toHaveClass('selected');

      const nlLang = screen.getByText('nl');
      fireEvent.click(nlLang);
      expect(nlLang).toHaveClass('selected');
      expect(selectedLang).not.toHaveClass('selected');

      const frLang = screen.getByText('fr');
      fireEvent.click(frLang);
      expect(frLang).toHaveClass('selected');
      expect(nlLang).not.toHaveClass('selected');
    });

  });