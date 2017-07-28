import React from "react";
import { withRouter } from "react-router";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logInAsGuest = this.logInAsGuest.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  logInAsGuest(event) {
    event.preventDefault();
    let username = "Link Start";
    let password = "password123";

    for (let i = 0; i < username.length; i++) {
      setTimeout(
        () => this.setState({ username: username.slice(0, i + 1) }),
        i * 75
      );
    }
    for (let i = 0; i < password.length; i++) {
      setTimeout(
        () => this.setState({ password: password.slice(0, i + 1) }),
        (i + username.length) * 75
      );
    }
    const user = { username: "GuestUser", password: "password123" };
    setTimeout(() => this.props.login({ user }), 1700);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({ user }).then(() => {
      this.props.history.replace("/feed/result");
    });
  }

  renderErrors() {
    return (
      <ul>
        {this.props.loginErrors.map((error, i) =>
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        )}
      </ul>
    );
  }

  render() {
    return (
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h2>Log in</h2>

          <div className="login-user">
            <label>USERNAME</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              className="login-input"
            />
          </div>

          <div className="login-password">
            <label>PASSWORD</label>
            <input
              type="password"
              value={this.state.password}
              onChange={this.update("password")}
              className="login-input"
            />
          </div>

          {this.renderErrors()}
          <div className="login-column">
            <input type="submit" value="Login" className="login-button" />
          </div>
        </form>
        <button className="guest-button" onClick={this.logInAsGuest}>
          Log in as Guest
        </button>
      </div>
    );
  }
}

export default withRouter(Login);
