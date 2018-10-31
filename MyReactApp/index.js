import React from "react";
import ReactDOM from "react-dom";

class ToDo extends React.Component {
  constructor() {
    super();
    this.state = { msg: "Hello World!!!!" };
  }
  render() {
    return <h3> This is a ToDo Comp : (this.state.msg)</h3>;
  }
}

ReactDOM.render(<Customer fname="John" />, document.getElementById("root"));
