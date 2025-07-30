import { fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductDetailsPage } from '../../../src/features/product/pages/ProductDetails';
import { renderWithProviders } from '../../test-utils';
import { getProductMock, mockUseProduct } from '../../mocks';

jest.mock('../../../src/features/product/hooks/useProducts', () => ({
  useProduct: () => mockUseProduct,
}));

describe('ProductDetailsPage', () => {
  test('should be able to increase and decrease product quantity', async () => {
    const { getByText, getByTitle } = renderWithProviders(<ProductDetailsPage />, {
      mocks: [getProductMock()],
    });

    await waitFor(() => {
      expect(getByText('+')).toBeInTheDocument();
      expect(getByText('-')).toBeInTheDocument();
    });

    const increaseQuantity = getByText('+');
    const currentQuantity = getByTitle('Current quantity');

    expect(currentQuantity).toHaveTextContent('1');

    fireEvent.click(increaseQuantity);
    expect(currentQuantity).toHaveTextContent('2');

    const decreaseQuantity = getByText('-');
    fireEvent.click(decreaseQuantity);
    expect(currentQuantity).toHaveTextContent('1');
  });

  test('should display product information correctly', async () => {
    const { getByText } = renderWithProviders(<ProductDetailsPage />, {
      mocks: [getProductMock()],
    });

    await waitFor(() => {
      expect(getByText('Test Product')).toBeInTheDocument();
      expect(getByText('Test product description')).toBeInTheDocument();
      expect(getByText('£10.00')).toBeInTheDocument();
    });
  });

  test('should show add to cart button', async () => {
    const { getByText } = renderWithProviders(<ProductDetailsPage />, {
      mocks: [getProductMock()],
    });

    await waitFor(() => {
      expect(getByText('Add to cart')).toBeInTheDocument();
    });
  });
});
