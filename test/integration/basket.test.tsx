import { fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ProductDetailsPage } from '../../src/features/product/pages/ProductDetails';
import Header from '../../src/components/layout/Header';
import { renderWithProviders } from '../test-utils';
import { getProductMock, mockUseProduct } from '../mocks';

const BasketIntegrationApp = () => (
  <>
    <Header />
    <ProductDetailsPage />
  </>
);

jest.mock('../../src/features/product/hooks/useProducts', () => ({
  useProduct: () => mockUseProduct,
}));

describe('Basket Integration', () => {
  test('should add items to basket and update header count', async () => {
    const { getByText, getByTitle } = renderWithProviders(<BasketIntegrationApp />, {
      mocks: [getProductMock()],
    });

    await waitFor(() => {
      expect(getByText('+')).toBeInTheDocument();
      expect(getByText('Add to cart')).toBeInTheDocument();
    });

    const increaseQuantity = getByText('+');
    const currentQuantity = getByTitle('Current quantity');

    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    expect(currentQuantity).toHaveTextContent('4');

    const addToBasketElement = getByText('Add to cart');
    fireEvent.click(addToBasketElement);

    await waitFor(() => {
      const basketItems = getByTitle('Basket items');
      expect(basketItems).toHaveTextContent('4');
    });
  });

  test('should show basket popover with added items', async () => {
    const { getByText, getByTitle, getByRole, queryByText } = renderWithProviders(
      <BasketIntegrationApp />,
      {
        mocks: [getProductMock()],
      },
    );

    await waitFor(() => {
      expect(getByText('Add to cart')).toBeInTheDocument();
    });

    const increaseQuantity = getByText('+');
    fireEvent.click(increaseQuantity);
    fireEvent.click(increaseQuantity);

    const addToBasketElement = getByText('Add to cart');
    fireEvent.click(addToBasketElement);

    await waitFor(() => {
      const basketItems = getByTitle('Basket items');
      expect(basketItems).toHaveTextContent('3');
    });

    const basketButton = getByRole('button', { name: /shopping basket/i });
    fireEvent.click(basketButton);

    await waitFor(() => {
      expect(getByText('Shopping Basket')).toBeInTheDocument();
      expect(queryByText('Your basket is empty')).not.toBeInTheDocument();
    });
  });

  test('should be able to remove items from basket', async () => {
    const { getByText, getByTitle, getByRole, getByLabelText } = renderWithProviders(
      <BasketIntegrationApp />,
      {
        mocks: [getProductMock()],
      },
    );

    await waitFor(() => {
      expect(getByText('Add to cart')).toBeInTheDocument();
    });

    const addToBasketElement = getByText('Add to cart');
    fireEvent.click(addToBasketElement);

    await waitFor(() => {
      const basketItems = getByTitle('Basket items');
      expect(basketItems).toHaveTextContent('1');
    });

    const basketButton = getByRole('button', { name: /shopping basket/i });
    fireEvent.click(basketButton);

    await waitFor(() => {
      const removeButton = getByLabelText('Remove Test Product from basket');
      fireEvent.click(removeButton);
    });

    await waitFor(() => {
      expect(getByText('Your basket is empty')).toBeInTheDocument();
    });
  });

  test('should handle multiple product additions correctly', async () => {
    const { getByText, getByTitle } = renderWithProviders(<BasketIntegrationApp />, {
      mocks: [getProductMock()],
    });

    await waitFor(() => {
      expect(getByText('Add to cart')).toBeInTheDocument();
    });

    const addToBasketElement = getByText('Add to cart');
    fireEvent.click(addToBasketElement);

    await waitFor(() => {
      const basketItems = getByTitle('Basket items');
      expect(basketItems).toHaveTextContent('1');
    });

    const increaseQuantity = getByText('+');
    fireEvent.click(increaseQuantity);
    fireEvent.click(addToBasketElement);

    await waitFor(() => {
      const basketItems = getByTitle('Basket items');
      expect(basketItems).toHaveTextContent('3');
    });
  });
});
