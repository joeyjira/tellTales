import React from 'react';
import { withRouter } from 'react-router';

import Signup from './signup';
import Login from './login';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/feed');
    }
  }

  render() {
    const { login, signup, signupErrors, loginErrors, history } = this.props;
    return (
      <div id="background">
        <div className="main-portal">
          <h1 className="title">tellTales</h1>
          <h2 className="tagline">Hello World!</h2>
          <div className="session-form-container">
            <Signup signupErrors={ signupErrors } signup={ signup } />
            <Login loginErrors={ loginErrors } login={ login } />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
