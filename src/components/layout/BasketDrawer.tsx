import { Divider, Typography, IconButton, Box } from '@mui/material';
import { Close, Delete } from '@mui/icons-material';
import { useCart } from '@/context/useCart';
import { StyledPopover, PopoverContainer } from './BasketDrawer.styles';

interface BasketPopoverProps {
  open: boolean;
  onClose: () => void;
  anchorEl: HTMLElement | null;
}

export const BasketPopover = ({ open, onClose, anchorEl }: BasketPopoverProps) => {
  const { items, itemCount, removeFromCart } = useCart();

  const totalValue = items.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = (itemId: string) => {
    removeFromCart(itemId);
  };

  return (
    <StyledPopover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      <PopoverContainer>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1,
          }}
        >
          <Typography variant="h6">Shopping Basket</Typography>
          <IconButton onClick={onClose} size="small">
            <Close fontSize="small" />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {itemCount === 0 && (
          <Box sx={{ textAlign: 'center', py: 2 }}>
            <Typography variant="body2" color="text.secondary">
              Your basket is empty
            </Typography>
          </Box>
        )}

        {items.map((item) => (
          <Box key={item.id} sx={{ mb: 1.5 }}>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}
            >
              <Box sx={{ flex: 1 }}>
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {item.name}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Qty: {item.quantity} × £{(item.price / 100).toFixed(2)}
                </Typography>
              </Box>
              <IconButton
                onClick={() => handleRemoveItem(item.id)}
                size="small"
                aria-label={`Remove ${item.name} from basket`}
                sx={{
                  ml: 1,
                  p: 0.5,
                  color: 'text.secondary',
                }}
              >
                <Delete fontSize="small" />
              </IconButton>
            </Box>
          </Box>
        ))}

        {itemCount > 0 && (
          <>
            <Divider sx={{ my: 1.5 }} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                Total:
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                £{(totalValue / 100).toFixed(2)}
              </Typography>
            </Box>
          </>
        )}
      </PopoverContainer>
    </StyledPopover>
  );
};
