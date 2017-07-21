import * as APIUtil from "../util/feed_api_util.js";

export const RECEIVE_FEED_SOURCES = "RECEIVE_FEED_SOURCES";

export const receiveFeedSources = feedSources => ({
  type: RECEIVE_FEED_SOURCES,
  feedSources
});

export const fetchFeedSources = () => dispatch =>
  APIUtil.getFeed().then(feeds => dispatch(receiveFeedSources(feeds)));
