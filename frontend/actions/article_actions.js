import * as APIUtil from "../util/article_api_util.js";

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";

export const receiveArticles = articles => ({
  type: RECEIVE_ARTICLES,
  articles
});

export const fetchArticles = source => dispatch =>
  APIUtil.getArticles(source).then(source => dispatch(receiveArticles(source)));
