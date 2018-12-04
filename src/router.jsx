import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AddForm from "./components/addForm";
import Todos from "./components/todos";
import NotFound from "./common/notFound";
import "./App.css";

class Router extends Component {
  render() {
    return (
      <main className="container" style={{ marginTop: 50 }}>
        <Switch>
          <Route path="/todos" component={Todos} />
          <Route path="/add" component={AddForm} />
          <Route path="/not-found/" component={NotFound} />
          <Redirect from="/" exact to="/todos" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    );
  }
}

export default Router;
