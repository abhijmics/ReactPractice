import React from "react";

export class SignIn extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Sign In</h1>
        <form>
          <p> Login</p>
          <p>
            <input type="text" name="login" />
          </p>
          <p>Password</p>
          <p>
            <input type="text" name="password" />
          </p>
        </form>
      </div>
    );
  }
}

export default SignIn;
