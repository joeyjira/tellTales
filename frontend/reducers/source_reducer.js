import merge from "lodash/merge";

import {
  RECEIVE_SOURCES,
  RECEIVE_SOURCE,
  REMOVE_SOURCE
} from "../actions/source_actions";

const nullSource = {
  1: {
    source_id: "",
    id: ""
  }
};

const SourceReducer = (state = nullSource, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SOURCES:
      return action.sources;
    case RECEIVE_SOURCE:
      const newState = merge({}, state)
      newState[action.source.id] = action.source;
      return newState;
    case REMOVE_SOURCE:
      const nextState = merge({}, state);
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
};

export default SourceReducer;
