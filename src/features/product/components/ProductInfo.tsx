import { ProductTitle, ProductSubtitle } from './ProductInfo.styles';
import type { Product } from '../models/product';

interface ProductInfoProps {
  product: Product;
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <>
      <ProductTitle variant="h2">{product.name}</ProductTitle>
      <ProductSubtitle variant="body2" color="text.secondary">
        {product.power} // Packet of {product.quantity}
      </ProductSubtitle>
    </>
  );
};
