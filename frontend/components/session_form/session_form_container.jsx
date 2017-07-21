import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  login,
  logout,
  signup,
  receiveCurrentUser
} from "../../actions/session_actions";
import SessionForm from "./session_form";

const mapStateToProps = ({ session }) => {
  return {
    loggedIn: Boolean(session.currentUser),
    loginErrors: session.loginErrors,
    signupErrors: session.signupErrors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    receiveCurrentUser: user => dispatch(receiveCurrentUser)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
