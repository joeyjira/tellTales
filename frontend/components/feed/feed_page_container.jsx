import { connect } from "react-redux";

import FeedPage from "./feed_page";
import { createCollection } from "../../actions/collection_actions";

const mapStateToProps = ({ session, feedSource }) => ({
  currentUser: session.currentUser,
  feedSources: feedSource
});

const mapDispatchToProps = dispatch => ({
  fetchFeedSources: () => dispatch(fetchFeedSources()),
  fetchCollections: () => dispatch(fetchCollections()),
  createCollection: (collection) => dispatch(createCollection(collection))
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
