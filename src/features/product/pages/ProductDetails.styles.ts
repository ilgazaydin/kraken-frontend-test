import { styled } from '@mui/material/styles';
import { Box, Container } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
}));

export const BackButtonContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const CenteredStateBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 200,
  textAlign: 'center',
}));
