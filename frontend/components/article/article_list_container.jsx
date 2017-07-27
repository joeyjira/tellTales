import { connect } from "react-redux";
import values from "lodash/values";

import ArticleList from "./article_list";
import { fetchCollections } from "../../actions/collection_actions";

const mapStateToProps = ({ session, articles, feedSource, collections }) => ({
  currentUser: session.currentUser,
  article: articles,
  feedSources: feedSource,
  collections: values(collections)
});

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollections()),
  fetchArticles: source => dispatch(fetchArticles(source))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
