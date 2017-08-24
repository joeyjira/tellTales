import React from "react";
import {withRouter} from "react-router";

import Signup from "./signup";
import Login from "./login";
import {fadeIn} from 'react-animations';
import {StyleSheet, css} from 'aphrodite';
import GreetingContainer from "../greeting/greeting_container";

const styles = StyleSheet.create({
  fadeIn: {
    animationName: fadeIn,
    animationDuration: '8s'
  }
});

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
    const {login, signup, signupErrors, loginErrors} = this.props;
    return (
      <div className={css(styles.fadeIn)}>
        <GreetingContainer/>
        <div id="background" className="background"></div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
