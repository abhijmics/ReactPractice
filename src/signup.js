import React from "react";

export class SignUn extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: ""
    };
  }

  processForm = () => {
    alert(this.state.name + ":" + this.state.email);
  };

  nameHandler = event => {
    this.setState({ name: event.target.value });
  };

  emailHandler = event => {
    this.setState({ email: event.target.value });
  };

  validate = () => {
    if (this.refs.login.value == "test" && this.refs.pass.value == "1234") {
      this.setState({ msg: "Login Successful.." });
    } else this.setState({ msg: "Login Failed" });
  };

  txtHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Sign up</h1>
        <form>
          <p> Login</p>
          <p>
            <input
              type="text"
              name="login"
              ref="login"
              onChange={this.txtHandler}
            />
          </p>
          <p>Password</p>
          <p>
            <input
              type="text"
              name="password"
              ref="pass"
              onChange={this.txtHandler}
            />
          </p>
          <p>
            <input type="submit" name="submit" onClick={this.validate} />
          </p>
        </form>
        <p>{this.state.msg}</p>
      </div>
    );
  }
}

export default SignUn;
