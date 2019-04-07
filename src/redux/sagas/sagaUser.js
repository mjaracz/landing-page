import {put, call, takeEvery} from 'redux-saga/effects';
import {post} from '../api/post';

import {FETCH_REGISTRATIONS, REGISTRATIONS_ERROR, REGISTRATIONS_DATA} from "../actions/registrationsUser";
import {FETCH_LOGIN, LOGIN_DATA, LOGIN_ERROR} from "../actions/loginUser";


function* postRegistrations(action) {
  const url = 'https://backendapi.turing.com/customers';
  try {
    const user = yield call(post, url, action.payload);
    yield put({type: REGISTRATIONS_DATA, payload: user})
  }
  catch(e) {
    yield put({type: REGISTRATIONS_ERROR, payload: e})
  }
}
function* postLogin(action) {
  const url = 'https://backendapi.turing.com/customers/login';
  try {
    const loginData = yield call(post, url, action.payload);
    yield put({ type: LOGIN_DATA, payload: loginData });
  }
  catch(e) {
    yield put({type: LOGIN_ERROR, payload: e});
  }
}

export function* registrationsWatcher() {
  yield takeEvery(FETCH_REGISTRATIONS, postRegistrations)
}
export function* loginWatcher() {
  yield takeEvery(FETCH_LOGIN, postLogin)
}
