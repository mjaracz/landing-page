import {productsWatcher} from "./sagaProducts";
import {categoryWatcher} from "./sagaCategory";
import {loginWatcher, registrationsWatcher} from "./sagaUser"
import {all} from 'redux-saga/effects';


export default function* rootSaga() {
  yield all([
    productsWatcher(),
    categoryWatcher(),
    registrationsWatcher(),
    loginWatcher()
  ]);
}
