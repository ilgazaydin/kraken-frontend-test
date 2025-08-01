import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';

export const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(4, 0),
  marginTop: 'auto',
})) as typeof Box;

export const FooterText = styled(Typography)(({ theme }) => ({
  display: 'block',
  lineHeight: 1.4,
  color: theme.palette.text.secondary,
  fontSize: '0.75rem',
}));
