import { combineReducers } from 'redux';
import getParamsProducts from "./getParamsProducts";
import getParamsCategories from "./getParamsCategories";

const rootReducer = combineReducers({
  products: getParamsProducts,
  category: getParamsCategories
});

export default rootReducer;
