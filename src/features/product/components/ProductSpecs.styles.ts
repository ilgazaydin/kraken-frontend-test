import { styled } from '@mui/material/styles';
import { Box, Table, Typography } from '@mui/material';

export const SpecsContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

export const SpecsTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(4),
}));

export const SpecsTable = styled(Table)(({ theme }) => ({
  '& .MuiTableCell-root': {
    border: 'none',
    borderBottom: '1px solid',
    borderBottomColor: theme.palette.divider,
    paddingTop: theme.spacing(1.5),
    paddingBottom: theme.spacing(1.5),
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: '0.875rem',
    fontWeight: 400,
    color: theme.palette.text.primary,
  },
  '& .MuiTableRow-root:last-child .MuiTableCell-root': {
    borderBottom: 'none',
  },
}));
