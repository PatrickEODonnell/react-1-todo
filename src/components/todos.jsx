import React, { Component } from "react";
import { getToDos } from "../services/fakeToDoService";
class Todos extends Component {
  state = {
    todos: getToDos()
  };
  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Assigned To</th>
            <th>Due Date</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {this.state.todos.map(todo => (
            <tr key={todo._id}>
              <td>{todo.description}</td>
              <td>{todo.assignedTo}</td>
              <td>{todo.dueDate}</td>
              <td />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Todos;
