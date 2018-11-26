import React, { Component } from "react";
class TodoTd extends Component {
  render() {
    return (
      <React.Fragment>
        <td>{this.props.todo.description}</td>
        <td>{this.props.todo.assignedTo}</td>
        <td>{this.props.todo.dueDate}</td>
        <td>
          {this.props.todo.status === "Incomplete" ? (
            <button
              onClick={() => this.props.onComplete(this.props.todo)}
              className="btn btn-warning btn-sm"
            >
              Outstanding
            </button>
          ) : (
            <button className="btn btn-success btn-sm" disabled>
              Completed
            </button>
          )}
        </td>
      </React.Fragment>
    );
  }
}

export default TodoTd;
