//@flow
import {FETCH_REGISTRATIONS, REGISTRATIONS_DATA, REGISTRATIONS_ERROR} from "../actions/registrationsUser";
import {FETCH_LOGIN, LOGIN_DATA, LOGIN_ERROR} from "../actions/loginUser";

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
  error: Object,
  registrations: userData,
  isLoading: boolean
}

const InitialState = {
  loadingSignUp: false,
  loadingLogin: false,
  registrations: {},
  login: {},
  error: {}
};

const postUser = (state: userStore = InitialState, action) => {
  switch(action.type) {
    case FETCH_REGISTRATIONS: {
      return ({
        ...state,
        loadingSignUp: true
      })
    }
    case REGISTRATIONS_DATA: {
      return ({
        ...state,
        loadingSignUp: false,
        registrations: action.payload
      })
    }
    case REGISTRATIONS_ERROR: {
      return ({
        ...state,
        error: action.payload
      })
    }
    case FETCH_LOGIN: {
      return ({
        ...state,
        loadingLogin: true
      })
    }
    case LOGIN_DATA: {
      return({
        ...state,
        loadingLogin: false,
        login: action.payload
      })
    }
    case LOGIN_ERROR: {
      return({
        ...state,
        loadingLogin: false,
        login: {},
        error: action.payload
      })
    }
    default: {
      return state
    }
  }
};

export default postUser;
