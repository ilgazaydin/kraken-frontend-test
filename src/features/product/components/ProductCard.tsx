import { memo } from 'react';
import type { Product, ProductListItem } from '../models/product';
import {
  StyledCard,
  StyledCardMedia,
  StyledCardContent,
  ProductTitle,
  ProductDescription,
  ProductPrice,
} from './ProductCard.styles';

interface ProductCardProps {
  product: ProductListItem | Product;
  onClick: () => void;
}

export const ProductCard = memo(({ product, onClick }: ProductCardProps) => {
  return (
    <StyledCard onClick={onClick}>
      <StyledCardMedia component="img" image={product.img_url} alt={product.name} />
      <StyledCardContent>
        <ProductTitle variant="h5" component="h3" gutterBottom>
          {product.name}
        </ProductTitle>
        <ProductDescription variant="body2">
          {product.power} // Packet of {product.quantity}
        </ProductDescription>
        <ProductPrice>£{(product.price / 100).toFixed(2)}</ProductPrice>
      </StyledCardContent>
    </StyledCard>
  );
});
