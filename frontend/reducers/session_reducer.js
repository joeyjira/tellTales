import merge from "lodash/merge";

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_SIGN_UP_ERRORS,
  RECEIVE_LOGIN_ERRORS
} from "../actions/session_actions";

const nullUser = Object.freeze({
  currentUser: null,
  loginErrors: [],
  signupErrors: []
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, nullUser, {
        currentUser
      });
    case RECEIVE_LOGIN_ERRORS:
      const loginErrors = action.errors;
      return merge({}, nullUser, {
        loginErrors
      });
    case RECEIVE_SIGN_UP_ERRORS:
      const signupErrors = action.errors;
      return merge({}, nullUser, {
        signupErrors
      });
    default:
      return state;
  }
};

export default SessionReducer;
