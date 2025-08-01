import { styled } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';

export const QuantityContainer = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const QuantityLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const QuantityControls = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
}));

export const QuantityValue = styled(Typography)(() => ({
  textAlign: 'center',
}));

export const QuantityButton = styled(Button)(({ theme }) => ({
  minWidth: '32px',
  width: '32px',
  height: '32px',
  borderRadius: theme.spacing(3),
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: 18,
  '&:disabled': {
    backgroundColor: theme.palette.secondary.dark,
    color: 'white',
  },
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));
