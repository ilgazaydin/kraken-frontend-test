import { Container } from '@mui/material';
import { FooterContainer, FooterText } from './Footer.styles';

const Footer = () => {
  return (
    <FooterContainer
      component="footer"
      sx={{
        textAlign: { xs: 'left', md: 'center' },
      }}
    >
      <Container maxWidth="lg">
        <FooterText variant="caption">
          Octopus Energy Ltd is a company registered in England and Wales. Registered number:
          09263424. Registered office: 33 Holborn, London, EC1N 2HT. Trading office: 20-24 Broadwick
          Street, London, W1F 8HT
        </FooterText>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
