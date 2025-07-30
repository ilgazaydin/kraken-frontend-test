import { useQuery } from '@apollo/client';
import { GET_PRODUCTS_LIST, GET_PRODUCT } from '../queries/productQueries';
import type { Product, ProductListItem } from '../models/product';

export const useProductsList = () => {
  const { data, loading, error } = useQuery<{ allProducts: ProductListItem[] }>(GET_PRODUCTS_LIST);

  return {
    products: data?.allProducts || [],
    loading,
    error,
  };
};

export const useProduct = (id: string) => {
  const { data, loading, error } = useQuery<{ Product: Product }>(GET_PRODUCT, {
    variables: { id },
    skip: !id,
  });

  return {
    product: data?.Product,
    loading,
    error,
  };
};
