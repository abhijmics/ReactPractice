import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./signin";

class Input extends React.Component {
  constructor() {
    super();
    this.state = { msg: " " };
  }

  render() {
    return <SignIn />;
  }
}

ReactDOM.render(<Input />, document.getElementById("root"));
