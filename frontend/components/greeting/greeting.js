import React from "react";
import { Link } from "react-router-dom";

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { logout, currentUser } = this.props;
    return (
      <div className="header-container">
        <Link to="/feed/result" className="header-link">
          <h1>tellTales</h1>
        </Link>
        <div className="greeting-container">
          <button className="logout-button" onClick={logout}>
            Log Out
          </button>
        </div>
      </div>
    );
  }
}

export default Greeting;
