// import logo from "./logo.svg";
import "./App.scss";
import { Component } from "react";
import { Outlet } from "react-router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Outlet />
      </div>
    );
  }
}

export default App;
