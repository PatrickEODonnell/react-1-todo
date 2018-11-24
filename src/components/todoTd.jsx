import React, { Component } from "react";
class TodoTd extends Component {
  state = {
    todo: this.props.todo,
    onComplete: this.props.onComplete
  };
  handleComplete = () => {
    const td = this.state.todo;
    td.status = "Complete";
    this.setState({ todo: td });
    this.state.onComplete(this.state.todo);
  };

  render() {
    return (
      <React.Fragment>
        <td>{this.state.todo.description}</td>
        <td>{this.state.todo.assignedTo}</td>
        <td>{this.state.todo.dueDate}</td>
        <td>{this.state.todo.status}</td>
        <td>
          {this.state.todo.status === "Incomplete" ? (
            <button
              onClick={() => this.handleComplete()}
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
