import { Typography } from '@mui/material';
import { useCart } from '@/context/useCart';
import { QuantitySelector } from './ProductQuantitySelector';
import { PriceQuantityBox, AddToCartButton } from './ProductActions.styles';
import type { Product } from '../models/product';

interface ProductActionsProps {
  product: Product;
  quantity: number;
  onQuantityChange: (quantity: number) => void;
}

export const ProductActions = ({ product, quantity, onQuantityChange }: ProductActionsProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id.toString(),
        name: product.name,
        price: product.price,
      },
      quantity,
    );
  };

  return (
    <>
      <PriceQuantityBox>
        <Typography variant="h5">£{(product.price / 100).toFixed(2)}</Typography>

        <QuantitySelector value={quantity} onChange={onQuantityChange} />
      </PriceQuantityBox>

      <AddToCartButton color="secondary" variant="contained" fullWidth onClick={handleAddToCart}>
        Add to cart
      </AddToCartButton>
    </>
  );
};
