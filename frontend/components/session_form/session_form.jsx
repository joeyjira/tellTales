import React from "react";
import { withRouter } from "react-router";

import Signup from "./signup";
import Login from "./login";
import { fadeIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '8s'
  }
})

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push("/feed");
    }
  }

  render() {
    const { login, signup, signupErrors, loginErrors } = this.props;
    return (
      <div className={css(styles.fadeIn)}>
        <div id="background" className="background">
          <div className="main-portal">
            <h1 className="title">tellTales</h1>
            <h2 className="tagline">Hello World!</h2>
            <div className="session-form-container">
              <Signup signupErrors={signupErrors} signup={signup} />
              <Login loginErrors={loginErrors} login={login} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
