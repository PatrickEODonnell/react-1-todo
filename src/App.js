import React, { Component } from "react";
import Todos from "./components/todos";
import AddTodo from "./components/addTodo";
import { getToDos, createTodo } from "./services/fakeToDoService";
import "./App.css";

class App extends Component {
  state = {
    todos: getToDos(),
    newTodo: createTodo()
  };
  handleAdd = todo => {
    const uuidv1 = require("uuid/v1");
    todo._id = uuidv1();
    console.log("handleAdd", todo);
    // todo.status = "Incomplete";
    const todos = [...this.state.todos];
    todos.push(todo);
    this.setState({ todos });
    const newTodo = createTodo();
    this.setState({ newTodo });
  };

  handleComplete = todo => {
    // todo.status = "Complete";
    console.log(todo);
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].status = "Complete";
    this.setState({ todos });
  };

  render() {
    console.log(this.state.todos);
    return (
      <main className="container">
        <AddTodo onAdd={this.handleAdd} todo={this.state.newTodo} />
        <Todos todos={this.state.todos} onComplete={this.handleComplete} />
      </main>
    );
  }
}

export default App;
