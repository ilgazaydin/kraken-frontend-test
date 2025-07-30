import { styled } from '@mui/material/styles';
import { colors } from '@/theme';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import type { TypographyProps } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  borderRadius: theme.spacing(2),
  border: 2,
  borderStyle: 'solid',
  borderColor: colors.deepSea,
  transition: 'all 0.2s ease-in-out',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-2px)',
  },
}));

export const StyledCardMedia = styled(CardMedia)<{
  component?: React.ElementType;
  image?: string;
  alt?: string;
}>(({ theme }) => ({
  height: 280,
  objectFit: 'contain',
  backgroundColor: '#f2f2f2',
  padding: theme.spacing(8),
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // purpleHaze
  color: theme.palette.text.primary,
}));

export const ProductTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontSize: '1.25rem',
  fontWeight: 700,
  lineHeight: 1.3,
  color: theme.palette.text.primary,
}));

export const ProductDescription = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.text.secondary,
  marginBottom: theme.spacing(1),
}));

export const ProductPrice = styled(Typography)(({ theme }) => ({
  fontSize: '1.4rem',
  fontWeight: 700,
  color: theme.palette.text.primary,
  marginTop: theme.spacing(2),
}));
