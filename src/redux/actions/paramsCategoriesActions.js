// @flow
export const CATEGORIES_FETCH = "CATEGORIES_FETCH";
export const CATEGORIES_FETCHED = "CATEGORIES_FETCHED";
export const CATEGORIES_ERROR = "SIDE_BAR_ERROR";

const categoriesFetch = () => {
  return({
    type: CATEGORIES_FETCH
  })
};

export const paramsCategoriesActions = (params) => (dispatch) => {
  dispatch(categoriesFetch());
  fetch(`https://backendapi.turing.com/categories/inDepartment${params}`)
    .then(res => res.json())
    .then(data => dispatch(categoriesFetched(data)))
    .then(error => dispatch(categoriesError(error)))
};

const categoriesFetched = (data) => {
  return({
    type: CATEGORIES_FETCHED,
    payload: data
  })
};

const categoriesError = (error: Object) => {
  return({
    type: CATEGORIES_ERROR,
    payload: error
  })
};
