import { fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { QuantitySelector } from '../../../src/features/product/components/ProductQuantitySelector';
import { renderWithProviders } from '../../test-utils';

describe('QuantitySelector', () => {
  const mockOnChange = jest.fn();

  beforeEach(() => {
    mockOnChange.mockClear();
  });

  test('should display initial quantity correctly', () => {
    const { getByTitle } = renderWithProviders(
      <QuantitySelector value={5} onChange={mockOnChange} />,
    );

    const currentQuantity = getByTitle('Current quantity');
    expect(currentQuantity).toHaveTextContent('5');
  });

  test('should increase quantity when + button is clicked', () => {
    const { getByText } = renderWithProviders(
      <QuantitySelector value={1} onChange={mockOnChange} />,
    );

    const increaseButton = getByText('+');
    fireEvent.click(increaseButton);

    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  test('should decrease quantity when - button is clicked', () => {
    const { getByText } = renderWithProviders(
      <QuantitySelector value={3} onChange={mockOnChange} />,
    );

    const decreaseButton = getByText('-');
    fireEvent.click(decreaseButton);

    expect(mockOnChange).toHaveBeenCalledWith(2);
  });

  test('should not decrease quantity below 1', () => {
    const { getByText } = renderWithProviders(
      <QuantitySelector value={1} onChange={mockOnChange} />,
    );

    const decreaseButton = getByText('-');
    fireEvent.click(decreaseButton);

    expect(mockOnChange).not.toHaveBeenCalled();
  });

  test('should disable decrease button when quantity is 1', () => {
    const { getByText } = renderWithProviders(
      <QuantitySelector value={1} onChange={mockOnChange} />,
    );

    const decreaseButton = getByText('-');
    expect(decreaseButton.closest('button')).toBeDisabled();
  });
});
