import merge from "lodash/merge";

import {
  RECEIVE_COLLECTIONS,
  RECEIVE_COLLECTION,
  REMOVE_COLLECTION,
  REMOVE_SOURCE
} from "../actions/collection_actions";

const nullCollection = {
  0: {
    title: "",
    id: "",
    sources: []
  }
};

const CollectionReducer = (state = nullCollection, action) => {
  Object.freeze(state);
  const newState = merge({}, state)
  switch (action.type) {
    case RECEIVE_COLLECTIONS:
      return action.collections;
    case RECEIVE_COLLECTION:
      newState[action.collection.id] = action.collection;
      return newState;
    case REMOVE_COLLECTION:
      delete newState[action.id];
      return newState;
    case REMOVE_SOURCE:
      delete newState[action.collection.id].sources
    default:
      return state;
  }
};

export default CollectionReducer;
