import {api} from "../api";
import {put, call, select} from 'redux-saga/effects';
import {FETCH_USER} from "../actions/postRegistrations";


const body = (state) => state.body;

export function* postRegistrations() {
  const userData = body(select());
  const url = `https://https://backendapi.turing.com/customers`;
  const user = yield call(api, url, userData);
  yield put({type: FETCH_USER, payload: user.customer})
}
