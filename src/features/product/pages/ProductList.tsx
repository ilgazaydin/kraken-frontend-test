import { useNavigate } from 'react-router-dom';
import { Typography } from '@mui/material';
import { useProductsList } from '../hooks/useProducts';
import { ProductGrid } from '../components/ProductGrid';
import { PageContainer, CenteredStateBox } from './ProductList.styles';

export const ProductList = () => {
  const navigate = useNavigate();
  const { products, loading, error } = useProductsList();

  const handleProductSelect = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  if (loading) {
    return (
      <PageContainer>
        <CenteredStateBox>
          <Typography color="text.secondary">Loading products...</Typography>
        </CenteredStateBox>
      </PageContainer>
    );
  }

  if (error) {
    return (
      <PageContainer>
        <CenteredStateBox>
          <Typography color="error">Error loading products: {error.message}</Typography>
        </CenteredStateBox>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <ProductGrid products={products} onProductSelect={handleProductSelect} />
    </PageContainer>
  );
};
