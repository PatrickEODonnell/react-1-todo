import React, { Component } from "react";
import AddTodo from "./components/addTodo";
import Pagination from "./components/pagination";
import TodosHeading from "./components/todosHeading";
import TodosTable from "./components/todosTable";
import StatusFilter from "./components/statusFilter";
import { paginate } from "./utils/paginate";
import { getToDos } from "./services/fakeToDoService";
import "./App.css";
import _ from "lodash";

class App extends Component {
  state = {
    todos: [],
    itemsPerPage: 5,
    currentPage: 1,
    statusFilter: "",
    sortColumn: { column: "description", order: "asc" }
  };
  componentDidMount() {
    this.setState({ todos: getToDos() });
  }

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

  handleFilterChange = e => {
    const newStatusFilter = e.target.value;
    this.setState({ statusFilter: newStatusFilter });
    this.setState({ currentPage: 1 });
  };
  handleSort = column => {
    this.setState({ sortColumn: column });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { todos, itemsPerPage, currentPage, statusFilter } = this.state;
    const filteredTodos =
      statusFilter === "All" || statusFilter === ""
        ? todos
        : todos.filter(t => t.status === statusFilter);

    const sortedTodos = _.orderBy(
      filteredTodos,
      [this.state.sortColumn.column],
      [this.state.sortColumn.order]
    );
    const todosForCurrentPage = paginate(
      sortedTodos,
      this.state.currentPage,
      this.state.itemsPerPage
    );
    return (
      <main className="container">
        <AddTodo onAdd={this.handleAdd} />

        <div className="row">
          <div className="col-md-6">
            <TodosHeading
              outstanding={
                this.state.todos.filter(t => t.status === "Incomplete").length
              }
            />
          </div>
          <div className="col-md-6">
            <StatusFilter
              statusFilter={statusFilter}
              onFilterChange={this.handleFilterChange}
            />
          </div>
        </div>

        <TodosTable
          todos={todosForCurrentPage}
          onComplete={this.handleComplete}
          onSort={this.handleSort}
          sortColumn={this.state.sortColumn}
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
