import { useState } from 'react';
import { Container, Badge } from '@mui/material';
import { useCart } from '@/context/useCart';
import { StyledAppBar, StyledToolbar, LogoImage, BasketButton, BasketIcon } from './Header.styles';
import { BasketPopover } from './BasketDrawer';

const Header = () => {
  const { itemCount } = useCart();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleBasketClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledAppBar>
        <Container>
          <StyledToolbar>
            <LogoImage src="https://static.octopuscdn.com/logos/logo.svg" alt="Octopus Energy" />

            <BasketButton aria-label="shopping basket" onClick={handleBasketClick}>
              <Badge badgeContent={itemCount} color="secondary" title="Basket items">
                <BasketIcon src="/img/basket.svg" alt="basket" />
              </Badge>
            </BasketButton>
          </StyledToolbar>
        </Container>
      </StyledAppBar>

      <BasketPopover open={Boolean(anchorEl)} onClose={handlePopoverClose} anchorEl={anchorEl} />
    </>
  );
};

export default Header;
