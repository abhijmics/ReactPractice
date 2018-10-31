
import React from "react";

export class SignIn extends React.Component {
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


  componentWillMount(){
    if(this.ref.login)
  }

  validate = () => {
    if (this.refs.login.value == "test" && this.refs.pass.value == "1234") {
      this.setState({ msg: "Login Successful.." });
      this.props.history.push("/");
    } else this.setState({ msg: "Login Failed" });
  };

  txtHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Sign In</h1>
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

export default SignIn;
