import { styled } from '@mui/material/styles';

// ✅ All of these have access to the MUI theme:

export const StyledDiv = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  borderRadius: theme.shape.borderRadius,
}));

export const StyledSpan = styled('span')(({ theme }) => ({
  color: theme.palette.text.primary,
  fontSize: theme.typography.h6.fontSize,
}));

export const StyledSection = styled('section')(({ theme }) => ({
  margin: theme.spacing(4),
  [theme.breakpoints.up('md')]: {
    margin: theme.spacing(8),
  },
}));

// ✅ Even custom components get the theme
interface CustomProps {
  customProp?: string;
}

export const StyledCustom = styled('div')<CustomProps>(({ theme, customProp }) => ({
  padding: theme.spacing(2),
  background: customProp === 'special' ? theme.palette.secondary.main : 'transparent',
}));
