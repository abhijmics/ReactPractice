import React from "react";
import ReactDOM from "react-dom";
import SignIn from "./signin";
import SignUp from "./signup";
import Home from "./home";
import { Link, Route, BrowserRouter } from "react-router-dom";
class RouterDemo extends React.Component {
  
  constructor() {
    super();
    this.state = { msg: " " };
  }

  render() {
    return (
      <div>


        <Link to="/signin">SignIn</Link>
        <Link to="/signup">SignUp</Link>

        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <RouterDemo />
  </BrowserRouter>,

  document.getElementById("root");
);
