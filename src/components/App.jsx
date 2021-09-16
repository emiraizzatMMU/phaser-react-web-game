import React from "react";
import { registerPlayer } from "../api/connection";

export default class App extends React.Component {
  componentDidMount() {
    let data = {
      firstName: "EmirFYP",
      lastName: "admin",
      email: "admin@emir.fyp",
      password: "123456",
      confirmedPassword: "123456",
    };

    registerPlayer(data);
  }

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h1>Hello World</h1>
      </div>
    );
  }
}
