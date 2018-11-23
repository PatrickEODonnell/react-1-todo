import React, { Component } from "react";
import { getToDos, updateTodo } from "../services/fakeToDoService";
class Todos extends Component {
  state = {
    todos: getToDos()
  };
  handleComplete = todo => {
    todo.status = "Complete";
    updateTodo(todo);
    const todos = getToDos();

    this.setState({ todos: todos });
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
              <td>
                {todo.status === "Incomplete" ? (
                  <button
                    onClick={() => this.handleComplete(todo)}
                    className="btn btn-warning btn-sm"
                  >
                    Outstanding
                  </button>
                ) : (
                  <button
                    onClick={() => this.handleComplete(todo)}
                    className="btn btn-success btn-sm"
                    disabled
                  >
                    Completed
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Todos;
