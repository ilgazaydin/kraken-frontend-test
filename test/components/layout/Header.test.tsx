import { fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../../../src/components/layout/Header';
import { renderWithProviders } from '../../test-utils';

describe('Header', () => {
  test('should display basket badge when there are items', () => {
    const { getByTitle } = renderWithProviders(<Header />);

    const basketBadge = getByTitle('Basket items');
    expect(basketBadge).toBeInTheDocument();
  });

  test('should show basket popover when clicked', async () => {
    const { getByRole, getByText } = renderWithProviders(<Header />);

    const basketButton = getByRole('button', { name: /basket/i });
    fireEvent.click(basketButton);

    await waitFor(() => {
      expect(getByText('Your basket is empty')).toBeInTheDocument();
    });
  });

  test('should have basket button accessible via aria-label', () => {
    const { getByRole } = renderWithProviders(<Header />);

    const basketButton = getByRole('button', { name: /shopping basket/i });
    expect(basketButton).toBeInTheDocument();
  });
});
