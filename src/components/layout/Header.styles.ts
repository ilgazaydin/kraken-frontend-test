import { styled } from '@mui/material/styles';
import { AppBar, Toolbar, IconButton } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
}));

export const StyledToolbar = styled(Toolbar)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));

export const LogoImage = styled('img')(({ theme }) => ({
  height: '24px',
  [theme.breakpoints.up('md')]: {
    height: '32px',
  },
}));

export const BasketButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.text.primary,
}));

export const BasketIcon = styled('img')(() => ({
  width: '24px',
  height: '24px',
}));
