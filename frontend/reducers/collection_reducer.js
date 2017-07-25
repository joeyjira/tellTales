import merge from "lodash/merge";

import {
  RECEIVE_COLLECTIONS,
  RECEIVE_COLLECTION
} from "../actions/collection_actions";

const nullCollection = {
  0: {
    title: ""
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
    default:
      return state;
  }
};

export default CollectionReducer;
