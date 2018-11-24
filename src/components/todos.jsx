import React, { Component } from "react";
import { getToDos, createTodo } from "../services/fakeToDoService";
import TodoTd from "../components/todoTd";
import AddTodo from "../components/addTodo";
class Todos extends Component {
  state = {
    todos: getToDos()
  };
  handleComplete = todo => {
    // todo.status = "Complete";
    console.log(todo);
    const todos = [...this.state.todos];
    const index = todos.indexOf(todo);
    todos[index] = { ...todo };
    todos[index].status = "Complete";
    this.setState({ todos });
    // updateTodo(todo);
    // const todos = getToDos();
    // this.setState({ todos: todos });
  };
  newTodo = createTodo();

  handleAdd = todo => {
    console.log("handleAdd");
    // todo.status = "Incomplete";
    const todos = [...this.state.todos];
    todos.push(todo);
    this.setState({ todos });
  };

  render() {
    return (
      <React.Fragment>
        <AddTodo onAdd={this.handleAdd} todo={this.newTodo} />
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th>Status</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {this.state.todos.map(todo => (
              <tr key={todo._id}>
                <TodoTd todo={todo} onComplete={this.handleComplete} />
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Todos;
