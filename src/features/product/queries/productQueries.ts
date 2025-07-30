import { gql } from '@apollo/client';

export const PRODUCT_LIST_ITEM_FRAGMENT = gql`
  fragment ProductListItem on Product {
    id
    name
    price
    power
    quantity
    img_url
    brand
  }
`;

export const PRODUCT_DETAILS_FRAGMENT = gql`
  fragment ProductDetails on Product {
    id
    name
    power
    description
    price
    quantity
    brand
    weight
    height
    width
    length
    model_code
    colour
    img_url
  }
`;

export const GET_PRODUCTS_LIST = gql`
  ${PRODUCT_LIST_ITEM_FRAGMENT}
  query GetProductsList {
    allProducts {
      ...ProductListItem
    }
  }
`;

export const GET_PRODUCT = gql`
  ${PRODUCT_DETAILS_FRAGMENT}
  query GetProduct($id: ID!) {
    Product(id: $id) {
      ...ProductDetails
    }
  }
`;
