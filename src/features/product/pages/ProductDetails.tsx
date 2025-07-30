import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Button, Typography, Grid } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import {
  ProductImage,
  ProductActions,
  ProductInfo,
  ProductDescription,
  ProductSpecs,
} from '../components';
import { useProduct } from '../hooks/useProducts';
import { StyledContainer, BackButtonContainer, CenteredStateBox } from './ProductDetails.styles';

export const ProductDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const { product, loading, error } = useProduct(id || '');
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
  };

  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <Box>
        <CenteredStateBox>
          <Typography color="text.secondary">Loading product details...</Typography>
        </CenteredStateBox>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        <CenteredStateBox>
          <Typography color="error">Error loading product: {error.message}</Typography>
        </CenteredStateBox>
      </Box>
    );
  }

  if (!product) {
    return (
      <Box>
        <CenteredStateBox>
          <Typography color="error">Product not found</Typography>
        </CenteredStateBox>
      </Box>
    );
  }

  const specsData = {
    Brand: product.brand,
    'Item weight (g)': product.weight,
    'Dimensions (cm)': `${product.height} x ${product.width} x ${product.length}`,
    'Item Model number': product.model_code,
    Colour: product.colour,
  };

  return (
    <StyledContainer maxWidth="lg">
      <BackButtonContainer>
        <Button
          variant="text"
          startIcon={<ArrowBack />}
          onClick={handleBack}
          sx={{ color: 'primary.contrastText' }}
        >
          Back to Products
        </Button>
      </BackButtonContainer>

      <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start">
        <Grid size={{ xs: 12, md: 5 }}>
          <ProductImage src={product.img_url} alt={product.name} size="medium" />
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <ProductInfo product={product} />

          <ProductActions
            product={product}
            quantity={quantity}
            onQuantityChange={handleQuantityChange}
          />

          <ProductDescription description={product.description} />

          <ProductSpecs data={specsData} />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};
