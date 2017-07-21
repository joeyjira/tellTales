import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout, currentUser } = this.props;
    return(
      <div className="header-container">
        <div className="greeting-container">
          <h1>Welcome {currentUser.username}!</h1>
          <button className="logout-button" onClick={logout}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default Greeting;
