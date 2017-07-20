import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout } = this.props;
    return(
      <div className="header-container">
        <h1>Welcome!</h1>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
    );
  }
}

export default Greeting;
