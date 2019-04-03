// @flow
export const FETCH_ACTION = 'FETCH_ACTION';
export const FETCHED_ACTION = 'FETCHED_ACTION';
export const ERROR_ACTION = 'ERROR_ACTION';

const fetchAction = () => {
  return({
    type: FETCH_ACTION
  })
};

export const paramsProductsActions = (params?: string) => (dispatch) => {
  dispatch(fetchAction());
  fetch(`https://backendapi.turing.com/products/${params}`)
    .then(res => res.json())
    .then(data => dispatch(fetchedAction(data.rows)))
    .then(error => dispatch(errorAction(error)))
};

const fetchedAction = (data) => {
  return({
    type: FETCHED_ACTION,
    payload: data
  })
};

const errorAction = (error) => {
  return({
    type: ERROR_ACTION,
    payload: error
  })
};
