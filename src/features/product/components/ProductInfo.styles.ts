import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';

export const ProductTitle = styled(Typography)(({ theme }) => ({
  lineHeight: 1.3,
  marginBottom: theme.spacing(2),
}));

export const ProductSubtitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(6),
}));
