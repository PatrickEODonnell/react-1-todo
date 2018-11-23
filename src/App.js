import React, { Component } from "react";
import Todos from "./components/todos";
import "./App.css";

class App extends Component {
  render() {
    return (
      <main className="container">
        <Todos />
      </main>
    );
  }
}

export default App;
