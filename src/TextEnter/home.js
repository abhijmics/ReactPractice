import React from "react";

export class Home extends component.React {
  render() {
    let login = local.Storage.getItem();
    return <h3>Welcome {login}</h3>;
  }
}

export default Home;
