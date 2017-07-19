import React from 'react';

import Signup from './signup';
import Login from './login';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  render() {
    return (
      <div id="background">
        <div className="main-portal">
          <h1 className="title">tellTales</h1>
          <h2 className="tagline"></h2>
          <div className="session-form-container">
            <Signup signupErrors={this.props.signupErrors} signup={this.props.signup} />
            <Login loginErrors={this.props.loginErrors} login={this.props.login} />
          </div>
        </div>
      </div>
    );
  }
}

export default SessionForm;
