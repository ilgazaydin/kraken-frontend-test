import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { ThemeProvider } from '@mui/material/styles';
import { CartProvider } from '../src/context/CartContext';
import { muiTheme } from '../src/theme';

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  mocks?: MockedResponse[];
  defaultOptions?: Record<string, unknown>;
}

export const renderWithProviders = (
  ui: ReactElement,
  {
    mocks = [],
    defaultOptions = { watchQuery: { errorPolicy: 'all' } },
    ...renderOptions
  }: CustomRenderOptions = {},
) => {
  const AllTheProviders = ({ children }: { children: React.ReactNode }) => (
    <BrowserRouter>
      <MockedProvider mocks={mocks} addTypename={false} defaultOptions={defaultOptions}>
        <ThemeProvider theme={muiTheme}>
          <CartProvider>{children}</CartProvider>
        </ThemeProvider>
      </MockedProvider>
    </BrowserRouter>
  );

  return render(ui, { wrapper: AllTheProviders, ...renderOptions });
};

export { renderWithProviders as render };
