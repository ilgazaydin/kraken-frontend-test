import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Toolbar, Box } from '@mui/material';
import theme from '@/theme';
import { CartProvider } from '@/context/CartContext';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ProductList } from '@/features/product/pages/ProductList';
import { ProductDetailsPage } from '@/features/product/pages/ProductDetails';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <Toolbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product/:id" element={<ProductDetailsPage />} />
          </Routes>
          <Footer />
        </Box>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
