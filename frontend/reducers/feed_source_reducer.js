import merge from 'lodash/merge';

import {
    RECEIVE_FEED_SOURCES
} from '../actions/feed_source_actions';

const nullFeed = {
    sources: []
};

const FeedSourceReducer = (state = nullFeed, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_FEED_SOURCES:
            console.log("IN REDUCER", action.feedSources);
            return action.feedSources;
        default:
            return state;
    }
};

export default FeedSourceReducer;

