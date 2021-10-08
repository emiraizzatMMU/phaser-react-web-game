import React from "react";
import { signInAdmin } from "../api/connection";

export default class App extends React.Component {
  componentDidMount() {
    signInAdmin();
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Hello World</h1>
      </div>
    );
  }
}
