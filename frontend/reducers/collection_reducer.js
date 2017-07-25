import merge from "lodash/merge";

import {
  RECEIVE_COLLECTIONS,
  RECEIVE_COLLECTION,
  REMOVE_COLLECTION
} from "../actions/collection_actions";

const nullCollection = {
  0: {
    title: "",
    id: ""
  }
};

const CollectionReducer = (state = nullCollection, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COLLECTIONS:
      return action.collections;
    case RECEIVE_COLLECTION:
      const newState = merge({}, state)
      newState[action.collection.id] = action.collection;
      return newState;
    case REMOVE_COLLECTION:
      const nextState = merge({}, state);
      delete nextState[action.id];
      return nextState;
    default:
      return state;
  }
};

export default CollectionReducer;
