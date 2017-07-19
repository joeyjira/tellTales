import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Existing User</Link>
    &nbsp;
    <Link to="/signup">Getting Started</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<div className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</div>
);




class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout } = this.props;
    return(
      <div>
        <h1>hello</h1>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    );
  }
}

export default Greeting;
