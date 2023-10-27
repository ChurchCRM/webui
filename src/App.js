// import logo from "./logo.svg";
import "./App.scss";
import { Component } from "react";
import ViewsLoginView from "./components/views/login-view/LoginView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ViewsLoginView />
        </header>
      </div>
    );
  }
}

export default App;
