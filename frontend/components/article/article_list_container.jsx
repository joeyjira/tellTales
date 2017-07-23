import { connect } from "react-redux";
import ArticleList from "./article_list";

const mapStateToProps = ({ session, articles }) => ({
  currentUser: session.currentUser,
  article: articles
});

const mapDispatchToProps = dispatch => ({
  fetchArticles: source => dispatch(fetchArticles(source))
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);
