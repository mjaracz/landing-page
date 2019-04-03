import { CATEGORIES_ERROR, CATEGORIES_FETCH, CATEGORIES_FETCHED } from '../actions/paramsCategoriesActions';

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
    case CATEGORIES_FETCH: {
      return Object.assign({}, state, {
        ...state,
        isLoading: true
      });
    }

    case CATEGORIES_FETCHED: {
      return Object.assign({}, state, {
        ...state,
        rows: action.payload,
        isLoading: false
      })
    }
    case CATEGORIES_ERROR: {
      return Object.assign({}, state, {
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
