import { styled, Card } from '@mui/material';

export const sizeConfigs = {
  small: { maxWidth: 200, minHeight: 200 },
  medium: { maxWidth: 350, minHeight: 300 },
  large: { maxWidth: 500, minHeight: 400 },
} as const;

export type SizeConfig = typeof sizeConfigs[keyof typeof sizeConfigs];

export const StyledProductImage = styled('img')<{ sizeConfig: SizeConfig }>(({ sizeConfig }) => ({
  width: '100%',
  maxWidth: sizeConfig.maxWidth,
  height: 'auto',
  objectFit: 'contain',
}));

export const StyledImageCard = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'sizeConfig',
})<{ sizeConfig: SizeConfig }>(({ theme, sizeConfig }) => ({
  backgroundColor: '#f2f2f2',
  borderRadius: theme.spacing(4),
  padding: theme.spacing(2),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '100%',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(3),
    minHeight: sizeConfig.minHeight,
  },
}));
