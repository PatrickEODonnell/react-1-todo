import React, { Component } from "react";
import AddTodo from "../components/addTodo";
import { getToDos } from "../services/fakeToDoService";

class AddForm extends Component {
  state = {
    todos: [],
    itemsPerPage: 5,
    currentPage: 1,
    statusFilter: "",
    sortColumn: { path: "description", order: "asc" }
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
    this.props.history.replace("/todos");
  };

  render() {
    return (
      <main className="container">
        <AddTodo onAdd={this.handleAdd} />
      </main>
    );
  }
}

export default AddForm;
