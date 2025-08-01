import { Grid, Container } from '@mui/material';
import { ProductCard } from './ProductCard';
import type { Product, ProductListItem } from '../models/product';

interface ProductGridProps {
  products: ProductListItem[] | Product[];
  onProductSelect: (productId: number) => void;
}

export const ProductGrid = ({ products, onProductSelect }: ProductGridProps) => {
  return (
    <Container>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
            <ProductCard product={product} onClick={() => onProductSelect(product.id)} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
