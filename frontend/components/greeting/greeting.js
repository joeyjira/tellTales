import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout } = this.props;
    return(
      <div>
        <h1></h1>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    );
  }
}

export default Greeting;
