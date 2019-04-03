//@flow
import { FETCHED_ACTION, FETCH_ACTION, ERROR_ACTION} from "../actions/paramsProductsActions";

export interface Product {
  product_id: number,
  name: string,
  description: string,
  price: string,
  discounted_price: string,
  thumbnail: string,
  errorMessage?: string
}

interface urlParamStore {
  paramData: Product[],
  isLoading: boolean,
  error: Object
}

const InitialState = {
  isLoading: false,
  paramData: [],
  error: {}
};

const getParamsProducts = (state: urlParamStore = InitialState, action) => {
  switch(action.type) {
    case FETCH_ACTION: {
      return Object.assign({}, state, {
        ...state,
        isLoading: true
      })
    }
    case FETCHED_ACTION: {
      return Object.assign({}, state, {
        ...state,
        isLoading: false,
        paramData: action.payload
      })
    }
    case ERROR_ACTION: {
      return Object.assign({}, state, {
        ...state,
        error: action.payload
      })
    }
    default: {
      return state
    }
  }
};

export default getParamsProducts;
