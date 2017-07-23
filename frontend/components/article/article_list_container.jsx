import { connect } from "react-redux";
import ArticleList from "./article_list";

const mapStateToProps = ({ session, articles, feedSource }) => ({
  currentUser: session.currentUser,
  article: articles,
  feedSources: feedSource
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: source => dispatch(fetchArticles(source)),
  fetchFeedSources: () => dispatch(fetchFeedSources())
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
