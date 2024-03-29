import {CATEGORIES_FETCH, GET_CATEGORIES, CATEGORIES_ERROR} from "../actions/getCategories";
import {put, call, takeEvery} from 'redux-saga/effects';
import {get} from '../api/get';

export function* getCategory(action) {
  const url = `https://backendapi.turing.com/categories/inDepartment${action.payload}`;
  try {
    const category = yield call(get, url.toString());
    yield put({type: CATEGORIES_FETCH, payload: category})
  }
  catch (e) {
    yield put({ type: CATEGORIES_ERROR, payload: e })
  }
}

export function* categoryWatcher() {
  yield takeEvery(GET_CATEGORIES, getCategory)
}
