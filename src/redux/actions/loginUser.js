export const FETCH_LOGIN = 'FETCH_LOGIN';
export const LOGIN_DATA = 'LOGIN_DATA';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const fetchLogin = (body) => ({
  type: FETCH_LOGIN,
  payload: body
});
