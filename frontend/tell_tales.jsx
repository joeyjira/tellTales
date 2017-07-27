import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root";
import { logout, login, signup } from "./actions/session_actions";
import { fetchFeedSources } from "./actions/feed_source_actions";
import { fetchArticles } from "./actions/article_actions";
import { fetchSources } from "./actions/source_actions";
import { fetchCollections, createCollection } from "./actions/collection_actions";

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.store = store;
  window.fetchFeedSources = fetchFeedSources;
  window.fetchArticles = fetchArticles;
  window.fetchCollections = fetchCollections;
  window.createCollection = createCollection;
  window.fetchSources = fetchSources;
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});
