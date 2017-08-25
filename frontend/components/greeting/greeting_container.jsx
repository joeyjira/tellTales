import { connect } from "react-redux";
import {
  login,
  logout,
  signup,
  receiveCurrentUser
} from "../../actions/session_actions";
import Greeting from "./greeting";

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser),
  loginErrors: session.loginErrors,
  signupErrors: session.signupErrors
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  signup: user => dispatch(signup(user)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
