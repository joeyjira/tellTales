import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import FeedSourceReducer from './feed_source_reducer';
const RootReducer = combineReducers(
  {
    session: SessionReducer,
    feedSource: FeedSourceReducer
  }
);

export default RootReducer;
