import merge from "lodash/merge";

import {
  RECEIVE_FEED_SOURCES,
  RECEIVE_ARTICLES
} from "../actions/feed_source_actions";

const nullFeed = {
  sources: []
};

const FeedSourceReducer = (state = nullFeed, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FEED_SOURCES:
      return action.feedSources;
    case RECEIVE_ARTICLES:
      return action.articles;
    default:
      return state;
  }
};

export default FeedSourceReducer;
