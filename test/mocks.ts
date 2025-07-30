import { MockedResponse } from '@apollo/client/testing';
import { GET_PRODUCT, GET_PRODUCTS_LIST } from '../src/features/product/queries/productQueries';

export const mockProduct = {
  id: '1',
  name: 'Test Product',
  power: '1800W',
  description: 'Test product description',
  price: 1000,
  quantity: 1,
  brand: 'Test Brand',
  weight: 100,
  height: 10,
  width: 20,
  length: 30,
  model_code: 'TEST123',
  colour: 'Blue',
  img_url: 'test-image.jpg',
};

export const mockProductList = [
  {
    id: '1',
    name: 'Test Product 1',
    price: 1000,
    power: '1800W',
    quantity: 1,
    img_url: 'test-image-1.jpg',
    brand: 'Test Brand',
  },
  {
    id: '2',
    name: 'Test Product 2',
    price: 2000,
    power: '2000W',
    quantity: 1,
    img_url: 'test-image-2.jpg',
    brand: 'Test Brand',
  },
];

export const getProductMock = (productId: string = '1'): MockedResponse => ({
  request: {
    query: GET_PRODUCT,
    variables: { id: productId },
  },
  result: {
    data: {
      Product: mockProduct,
    },
  },
});

export const getProductsListMock = (): MockedResponse => ({
  request: {
    query: GET_PRODUCTS_LIST,
  },
  result: {
    data: {
      allProducts: mockProductList,
    },
  },
});

export const mockUseProduct = {
  product: mockProduct,
  loading: false,
  error: null,
};

export const mockUseProductsList = {
  products: mockProductList,
  loading: false,
  error: null,
};

export const mockRouterHooks = () => {
  jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ id: '1' }),
    useNavigate: () => jest.fn(),
  }));
};
