import { productsWatcher } from "./sagaProducts";
import { categoryWatcher } from "./sagaCategory";
import { all } from 'redux-saga/effects';


export default function* rootSaga() {
  yield all([
    productsWatcher(),
    categoryWatcher()
  ]);
}
