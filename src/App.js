import React, { Component } from "react";
import Todos from "./components/todos";
import AddTodo from "./components/addTodo";
import Pagination from "./components/pagination";
import { paginate } from "./utils/paginate";
import { getToDos, createTodo } from "./services/fakeToDoService";
import "./App.css";

class App extends Component {
  state = {
    todos: getToDos(),
    newTodo: createTodo(),
    itemsPerPage: 5,
    currentPage: 1
  };
  handleAdd = todo => {
    const uuidv1 = require("uuid/v1");
    todo._id = uuidv1();
    console.log("handleAdd", todo);
    const todos = [...this.state.todos];
    todos.push(todo);
    this.setState({ todos });
    const newTodo = createTodo();
    this.setState({ newTodo });
  };

  handleComplete = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].status = "Complete";
    this.setState({ todos });
  };

  handlePageChange = page => {
    console.log(page);
    this.setState({ currentPage: page });
  };

  render() {
    const { todos, itemsPerPage, currentPage, newTodo } = this.state;
    const todosForCurrentPage = paginate(
      this.state.todos,
      this.state.currentPage,
      this.state.itemsPerPage
    );
    return (
      <main className="container">
        <AddTodo onAdd={this.handleAdd} todo={newTodo} />
        <Todos
          todos={todosForCurrentPage}
          onComplete={this.handleComplete}
          outstanding={
            this.state.todos.filter(t => t.status === "Incomplete").length
          }
        />
        <Pagination
          itemsCount={todos.length}
          itemsPerPage={itemsPerPage}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </main>
    );
  }
}

export default App;
