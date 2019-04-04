import { combineReducers } from 'redux';
import getParamsProducts from "./getParamsProducts";
import getParamsCategories from "./getParamsCategories";

const rootReducer = combineReducers({
  products: getParamsProducts,
  categories: getParamsCategories
});

export default rootReducer;
