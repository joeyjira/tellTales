import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Existing User</Link>
    &nbsp;
    <Link to="/signup">Getting Started</Link>
    &nbsp;
    <Link to="/demo">Demo</Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<div className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
