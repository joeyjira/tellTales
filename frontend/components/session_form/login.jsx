import React from 'react';

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
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  logInAsGuest() {
    return e => {
      e.preventDefault();
      const user = {
        username: "user",
        password: "password" };
      this.props.login({user}).then(() => {
        this.props.history.push("/feed");
      });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.login({user});
    this.props.history.push("/feed");
  }

  renderErrors() {
    return(
      <ul>
        {this.props.loginErrors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className="login">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <h2>Log in</h2>

          <div className="login-user">
            <label>USERNAME</label>
            <input type="text"
              value={this.state.user}
              onChange={this.update('user')}
              className="login-input"/>
          </div>

          <div className="login-password">
            <label>PASSWORD</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"/>
          </div>

            {this.renderErrors()}
          <div className="login-column">
            <button className="guest-button" onClick={this.logInAsGuest()} >Log in as Guest</button>
            <input type="submit" value="Login" className="login-button" />
          </div>
        </form>
      </div>
    );
  }
}

export default Login;
