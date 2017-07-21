import * as APIUtil from "../util/feed_api_util.js";

export const RECEIVE_FEED_SOURCES = "RECEIVE_FEED_SOURCES";
export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";

export const receiveFeedSources = feedSources => ({
  type: RECEIVE_FEED_SOURCES,
  feedSources
});

export const receiveArticles = articles => ({
  type: RECEIVE_ARTICLES,
  articles
});

export const fetchFeedSources = () => dispatch =>
  APIUtil.getFeed().then(feeds => dispatch(receiveFeedSources(feeds)));

export const fetchArticles = source => dispatch =>
  APIUtil.getArticles(source).then(source =>
    dispatch(receiveArticles)
  );
