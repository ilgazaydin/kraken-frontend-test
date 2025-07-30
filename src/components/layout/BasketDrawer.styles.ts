import { styled } from '@mui/material/styles';
import { Popover, Box } from '@mui/material';
import { colors } from '@/theme';

// Only keep complex styled components that benefit from styled-components
export const StyledPopover = styled(Popover)(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: theme.spacing(2),
  },
}));

export const PopoverContainer = styled(Box)(({ theme }) => ({
  width: 280,
  padding: theme.spacing(4),
  maxHeight: 400,
  overflow: 'auto',
  border: `2px solid ${colors.deepSea}`,
  borderRadius: theme.spacing(2),
}));
