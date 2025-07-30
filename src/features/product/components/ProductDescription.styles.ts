import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { colors } from '@/theme';

export const DescriptionBox = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  paddingTop: theme.spacing(4),
  paddingBottom: theme.spacing(4),
  backgroundColor: 'transparent',
  marginLeft: 0,
  marginRight: 0,
  paddingLeft: 0,
  paddingRight: 0,
  [theme.breakpoints.down('md')]: {
    backgroundColor: colors.hemocyanin,
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export const DescriptionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const DescriptionText = styled(Typography)(() => ({
  lineHeight: 1.6,
}));
