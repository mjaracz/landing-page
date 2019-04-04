//@flow
import { POST_REGISTRATIONS, FETCH_USER, FETCH_ERROR } from "../actions/postRegistrations";

interface User {
  customer_id: number,
  name: string,
  email: string,
  address_1: string,
  address_2: string,
  city: string,
  region: string,
  postal_code: string,
  shipping_region_id: null,
  day_phone: null,
  eve_phone: null,
  mob_phone: null
}

type userData = {
  user: User
}

interface userStore {
  userData: userData
}

const InitialState = {
  isLoading: false,
  userData: {},
  error: {}
};

const postRegistrations = (state: userStore = InitialState, action) => {
  switch(action.type) {
    case POST_REGISTRATIONS: {
      return ({
        ...state,
        isLoading: true
      })
    }
    case FETCH_USER: {
      return ({
        ...state,
        isLoading: false,
        paramData: action.payload
      })
    }
    case FETCH_ERROR: {
      return ({
        ...state,
        error: action.payload
      })
    }
    default: {
      return state
    }
  }
};

export default postRegistrations;
