import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

export const PriceQuantityBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  marginBottom: theme.spacing(4),
  flexWrap: 'wrap',
  gap: theme.spacing(2),
}));

export const AddToCartButton = styled(Button)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  borderRadius: theme.spacing(1),
  color: 'primary',
}));
