import merge from 'lodash/merge';

import {
  RECEIVE_CURRENT_USER,
  RECEIVE_ERRORS,
  LOGOUT
} from '../actions/session_actions';

const nullUser = () => (
  {
    currentUser: null,
    errors: []
  }
);

const SessionReducer = (state = nullUser, action) => {
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, currentUser);
    case LOGOUT:
      return state;
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, state, errors);
    default:
  }
};

export default SessionReducer;
