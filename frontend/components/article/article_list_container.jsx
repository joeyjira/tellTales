import { connect } from "react-redux";
import ArticleList from "./article_list";
import { createCollection } from "../../actions/collection_actions";

const mapStateToProps = ({ session, articles, feedSource }) => ({
  currentUser: session.currentUser,
  article: articles,
  feedSources: feedSource
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: source => dispatch(fetchArticles(source)),
  fetchFeedSources: () => dispatch(fetchFeedSources()),
  createCollection: (collection) => dispatch(createCollection(collection))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
