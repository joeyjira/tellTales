import { connect } from "react-redux";
import SourceResult from "./source_result";

const mapStateToProps = ({ session, feedSource }) => ({
  currentUser: session.currentUser,
  feedSources: feedSource
});

const mapDispatchToProps = dispatch => ({
  fetchFeedSources: () => dispatch(fetchFeedSources())
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
