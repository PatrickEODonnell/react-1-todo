import React, { Component } from "react";
import Todos from "./components/todos";
import AddTodo from "./components/addTodo";
import Pagination from "./components/pagination";
import { paginate } from "./utils/paginate";
import { getToDos } from "./services/fakeToDoService";
import "./App.css";

class App extends Component {
  state = {
    todos: getToDos(),
    itemsPerPage: 5,
    currentPage: 1,
    statusFilter: ""
  };
  handleAdd = todo => {
    const uuidv1 = require("uuid/v1");
    todo._id = uuidv1();
    const todos = [...this.state.todos];
    todos.push(todo);
    this.setState({ todos });
  };

  handleComplete = todo => {
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].status = "Complete";
    this.setState({ todos });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  handleFilterChange = e => {
    console.log(e.target.value);
    const newStatusFilter = e.target.value;
    this.setState({ statusFilter: newStatusFilter });
  };

  render() {
    const { todos, itemsPerPage, currentPage, statusFilter } = this.state;
    const filteredTodos =
      statusFilter === "All" || statusFilter === ""
        ? todos
        : todos.filter(t => t.status === statusFilter);
    const todosForCurrentPage = paginate(
      filteredTodos,
      this.state.currentPage,
      this.state.itemsPerPage
    );
    return (
      <main className="container">
        <AddTodo onAdd={this.handleAdd} />

        <Todos
          todos={todosForCurrentPage}
          onComplete={this.handleComplete}
          outstanding={
            this.state.todos.filter(t => t.status === "Incomplete").length
          }
          statusFilter={statusFilter}
          onFilterChange={this.handleFilterChange}
        />
        <Pagination
          itemsCount={filteredTodos.length}
          itemsPerPage={itemsPerPage}
          onPageChange={this.handlePageChange}
          currentPage={currentPage}
        />
      </main>
    );
  }
}

export default App;
