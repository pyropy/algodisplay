import React from 'react';
import { render, screen } from '@testing-library/react';
import Algodisplay from '../pages/Algodisplay';

test('renders learn react link', () => {
  render(<Algodisplay />);
  const linkElement = screen.getByText(/Nothing Here/i);
  expect(linkElement).toBeInTheDocument();
});
