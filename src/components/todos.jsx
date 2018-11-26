import React, { Component } from "react";
import TodoTd from "../components/todoTd";

class Todos extends Component {
  render() {
    return (
      <React.Fragment>
        <table className="table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Assigned To</th>
              <th>Due Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {this.props.todos.map(todo => (
              <tr key={todo._id}>
                <TodoTd todo={todo} onComplete={this.props.onComplete} />
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Todos;
