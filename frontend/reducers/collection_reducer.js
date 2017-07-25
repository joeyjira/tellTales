import merge from "lodash/merge";

import {
  RECEIVE_COLLECTIONS,
  RECEIVE_COLLECTION
} from "../actions/collection_actions";

const nullCollection = {
  collections: []
};

const CollectionReducer = (state = nullCollection, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_COLLECTIONS:
      return action.collections;
    case RECEIVE_COLLECTION:
      return merge({}, state, action.collection);
    default:
      return state;
  }
};

export default CollectionReducer;
