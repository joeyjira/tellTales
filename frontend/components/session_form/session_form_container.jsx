import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  login,
  logout,
  signup,
  receiveCurrentUser
} from "../../actions/session_actions";
import { fetchFeedSources } from "../../actions/feed_source_actions.js";
import { fetchArticles } from "../../actions/article_actions";

import SessionForm from "./session_form";

const mapStateToProps = ({ session, feedSource, articles }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    loginErrors: session.loginErrors,
    signupErrors: session.signupErrors,
    article: articles,
    feedSources: feedSource
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    receiveCurrentUser: user => dispatch(receiveCurrentUser),
    fetchFeedSources: () => dispatch(fetchFeedSources()),
    fetchArticles: source => dispatch(fetchArticles(source))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
