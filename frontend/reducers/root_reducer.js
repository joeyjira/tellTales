import { combineReducers } from "redux";

import SessionReducer from "./session_reducer";
import FeedSourceReducer from "./feed_source_reducer";
import ArticleReducer from "./article_reducer";
import CollectionReducer from "./collection_reducer";

const RootReducer = combineReducers({
  session: SessionReducer,
  feedSource: FeedSourceReducer,
  articles: ArticleReducer,
  collections: CollectionReducer,
});

export default RootReducer;
