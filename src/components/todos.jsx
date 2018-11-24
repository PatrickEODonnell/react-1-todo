import React, { Component } from "react";
import { getToDos, updateTodo } from "../services/fakeToDoService";
import TodoTd from "../components/todoTd";
class Todos extends Component {
  state = {
    todos: getToDos()
  };
  handleComplete = todo => {
    todo.status = "Complete";
    console.log(todo);
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
    );
  }
}

export default Todos;
