//@flow
import {FETCH_ERROR, FETCH_PRODUCTS, GET_PRODUCTS} from "../actions/getProducts";

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
  data: Product[],
  isLoading: boolean,
  params: string,
  error: Object
}

const InitialState = {
  isLoading: false,
  products: [],
  params: '',
  error: {}
};

const getParamsProducts = (state: urlParamStore = InitialState, action) => {
  switch(action.type) {
    case GET_PRODUCTS: {
      return ({
        ...state,
        isLoading: true,
        params: action.payload
      })
    }
    case FETCH_PRODUCTS: {
      return ({
        ...state,
        isLoading: false,
        products: action.payload
      })
    }
    case FETCH_ERROR: {
      return ({
        ...state,
        isLoading: false,
        error: action.payload
      })
    }
    default: {
      return state
    }
  }
};

export default getParamsProducts;
