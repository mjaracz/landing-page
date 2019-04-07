import {FETCH_ERROR, FETCH_PRODUCTS, GET_PRODUCTS} from "../actions/getProducts";
import {put, call, takeEvery} from 'redux-saga/effects';
import {get} from '../api/get';

export function* fetchProducts(action) {
  const url = `https://backendapi.turing.com/products/${action.payload}`;
  try {
    const products = yield call(get, url.toString());
    yield put({ type: FETCH_PRODUCTS, payload: products.rows })
  }
  catch (error) {
    yield put ({ type: FETCH_ERROR, payload: error })
  }
}

export function* productsWatcher() {
  yield takeEvery(GET_PRODUCTS, fetchProducts)
}
