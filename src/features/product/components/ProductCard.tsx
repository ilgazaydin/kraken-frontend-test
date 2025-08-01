import { memo } from 'react';
import type { Product, ProductListItem } from '../models/product';
import { StyledCard, StyledCardMedia, StyledCardContent } from './ProductCard.styles';
import { Typography } from '@mui/material';

interface ProductCardProps {
  product: ProductListItem | Product;
  onClick: () => void;
}

export const ProductCard = memo(({ product, onClick }: ProductCardProps) => {
  return (
    <StyledCard onClick={onClick}>
      <StyledCardMedia component="img" image={product.img_url} alt={product.name} />
      <StyledCardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" sx={{ my: 1 }}>
          {product.power} // Packet of {product.quantity}
        </Typography>
        <Typography variant="h6">£{(product.price / 100).toFixed(2)}</Typography>
      </StyledCardContent>
    </StyledCard>
  );
});
