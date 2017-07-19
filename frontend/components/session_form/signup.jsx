import React from 'react';

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  renderErrors() {
    return(
      <ul>
        {this.props.signupErrors.map((error, i) => (
          <li className="errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className="signup">
        <form className="signup-form" onSubmit={this.handleSubmit}>
          <h2>Sign Up</h2>

          <div className="user">
            <label>USERNAME</label>
            <input type="text"
              value={this.state.user}
              onChange={this.update('username')}
              className="login-input"/>
          </div>

          <div className="password">
            <label>PASSWORD</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"/>
          </div>

          <div className="signup-column">
            {this.renderErrors()}
            <input className="signup-button" type="submit" value="Sign Up" />
          </div>
        </form>
      </div>
    );
  }
}

export default Signup;
