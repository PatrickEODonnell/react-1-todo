import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Todos from "./components/todos";
import NotFound from "./common/notFound";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import AddTodo from "./components/addTodo";

class Router extends Component {
  render() {
    return (
      <main className="container" style={{ marginTop: 50 }}>
        <Switch>
          <Route path="/todos" component={Todos} />
          <Route path="/add" component={AddTodo} />
          <Route path="/not-found/" component={NotFound} />
          <Redirect from="/" exact to="/todos" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default Router;
