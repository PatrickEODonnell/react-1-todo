import React, { Component } from "react";
class TodoColumns extends Component {
  render() {
    const { todo, onComplete } = this.props;
    return (
      <React.Fragment>
        <td>{todo.description}</td>
        <td>{todo.assignedTo}</td>
        <td>{todo.dueDate}</td>
        <td>
          <button
            onClick={() => onComplete(todo)}
            className={
              todo.status === "Incomplete"
                ? "btn btn-warning btn-sm"
                : "btn btn-success btn-sm"
            }
            disabled={todo.status === "Complete" ? "diabled" : ""}
          >
            {todo.status === "Complete" ? "Completed" : "Outstanding"}
          </button>
        </td>
      </React.Fragment>
    );
  }
}

export default TodoColumns;
