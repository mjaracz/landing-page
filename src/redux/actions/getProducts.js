// @flow
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_ERROR = 'FETCH_ERROR';

export const getProducts = (params) => ({
  type: GET_PRODUCTS,
  payload: params
});

