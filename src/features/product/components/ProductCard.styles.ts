import { styled } from '@mui/material/styles';
import { colors } from '@/theme';
import { Card, CardContent, CardMedia } from '@mui/material';

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
  height: 200,
  objectFit: 'contain',
  backgroundColor: '#f2f2f2',
  padding: theme.spacing(4),
}));

export const StyledCardContent = styled(CardContent)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main, // purpleHaze
  color: theme.palette.text.primary,
  padding: theme.spacing(2),
  '&:last-child': {
    paddingBottom: theme.spacing(2),
  },
}));
