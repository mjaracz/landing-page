import { combineReducers } from 'redux';
import getProducts from "./getProducts";
import getCategories from "./getCategories";
import postUser from "./postUser"

const rootReducer = combineReducers({
  products: getProducts,
  categories: getCategories,
  user: postUser
});

export default rootReducer;
