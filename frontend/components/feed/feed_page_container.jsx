import { connect } from "react-redux";
import FeedPage from "./feed_page";

const mapStateToProps = ({ session, feedSource }) => ({
  currentUser: session.currentUser,
  feedSources: feedSource
});

const mapDispatchToProps = dispatch => ({
  fetchFeedSources: () => dispatch(fetchFeedSources())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
