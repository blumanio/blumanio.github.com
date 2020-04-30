import { Component } from "react";
import ReactDOM from "react-dom";
import React from "react";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
export default class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Navbar></Navbar>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
