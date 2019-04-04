export const GET_CATEGORIES = 'GET_CATEGORIES';
export const CATEGORIES_FETCH = 'CATEGORIES_FETCH';
export const CATEGORIES_ERROR = 'CATEGORIES_ERROR';

export const getCategories = (params) => ({
    type: GET_CATEGORIES,
    payload: params
});

