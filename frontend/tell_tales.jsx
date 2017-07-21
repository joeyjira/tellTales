import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {logout, login, signup} from './actions/session_actions';
import { fetchFeedSources, fetchArticles } from './actions/feed_source_actions';

document.addEventListener('DOMContentLoaded', () => {
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
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={ store } />, root);
});
