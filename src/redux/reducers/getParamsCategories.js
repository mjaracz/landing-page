//@ flow
import {GET_CATEGORIES, CATEGORIES_FETCH, CATEGORIES_ERROR} from '../actions/getCategories';

export interface Item  {
  category_id: number,
  name: string,
  description: string,
  department_id: number
}
interface CategoriesStore {
  rows: Item[],
  isLoading: boolean,
  error: Object
}
const InitialStore = {
  rows: [],
  error: {},
  isLoading: false
};

const getParamsCategories = (state: CategoriesStore = InitialStore, action) => {
  switch (action.type) {
    case GET_CATEGORIES: {
      return ({
        ...state,
        isLoading: true,
        params: action.payload
      })
    }

    case CATEGORIES_FETCH: {
      return ({
        ...state,
        isLoading: false,
        rows: action.payload
      })
    }
    case CATEGORIES_ERROR: {
      return ({
        ...state,
        error: action.payload,
        isLoading: false
      })
    }
    default: {
      return state
    }
  }
};

export default getParamsCategories;
