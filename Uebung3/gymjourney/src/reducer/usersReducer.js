import {
  GET_USERS_FAILURE,
  GET_USERS_FETCHING,
  GET_USERS_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGIN_USER_FETCHING,
  LOGIN_USER_SUCCESS,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_FETCHING,
  SIGNUP_USER_SUCCESS,
} from "../actions";

const initialState = {
  users: "",
  fetchingUsers: false,
  fetchingUsersError: "",
  loggedInUser: {},
  token: "",
  fetchingLogin: false,
  fetchingLoginError: "",
  signedUpUser: "",
  fetchingSignup: false,
  fetchingSignupError: "",
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_FETCHING:
      return {
        ...state,
        fetchingUsers: true,
        fetchingUsersError: "",
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload.users,
        fetchingUsers: false,
        fetchingUsersError: "",
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        fetchingUsers: false,
        fetchingUsersError: action.payload,
      };

    case LOGIN_USER_FETCHING:
      return {
        ...state,
        fetchingLogin: true,
        fetchingLoginError: "",
      };
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        loggedInUser: action.payload.user,
        token: action.payload.token,
        fetchingLogin: false,
        fetchingLoginError: "",
      };
    case LOGIN_USER_FAILURE:
      return {
        ...state,
        fetchingLogin: false,
        fetchingLoginError: action.payload,
      };
    case SIGNUP_USER_FETCHING:
      return {
        ...state,
        fetchingSignup: true,
        fetchingSignupError: "",
      };
    case SIGNUP_USER_SUCCESS:
      return {
        ...state,
        signedUpUser: action.payload.user,
        fetchingSignup: false,
        fetchingSignupError: "",
      };
    case SIGNUP_USER_FAILURE:
      return {
        ...state,
        fetchingSignup: false,
        fetchingSignupError: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
