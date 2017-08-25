import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import Signup from "../session_form/signup";
import Login from "../session_form/login";

class Greeting extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  handleModal() {
    this.openModal();
  }

  render() {
    const {
      login,
      signup,
      signupErrors,
      loginErrors,
      logout,
      currentUser
    } = this.props;

    return (
      <div className="header-container">
        <Link to="/feed/result" className="header-link">
          <h1>tellTales</h1>
        </Link>
        <div className="greeting-container">
          {currentUser
            ? <div className="welcome-message">
                Welcome {currentUser.username}!
                <button className="logout-button" onClick={logout}>
                  Log Out
                </button>
              </div>
            : <div className="login-signup-container">
                <button className="logout-button" onClick={this.openModal}>
                  Login
                </button>
                <button className="logout-button" onClick={this.openModal}>
                  Sign Up
                </button>
              </div>}
        </div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          contentLabel="article-view"
          className="session-modal"
        >
          <div className="main-portal">
            <h1 className="title">tellTales</h1>
            <h2 className="tagline">Delivering the World's Buzz</h2>
            <div className="session-form-container">
              <Signup signupErrors={signupErrors} signup={signup} />
              <Login loginErrors={loginErrors} login={login} />
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Greeting;
