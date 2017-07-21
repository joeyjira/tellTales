import merge from 'lodash/merge';

import {
    RECEIVE_ARTICLES
} from '../actions/article_actions';

const nullFeed = {
    articles: []
};

const ArticleReducer = (state = nullFeed, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ARTICLES:
            return action.articles;
        default:
            return state;
    }
};

export default ArticleReducer;

