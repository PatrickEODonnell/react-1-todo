import React, { Component } from "react";
import TodoColumns from "./todoColumns";

class Todos extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-3 col-sm-4">
            <h3>
              Todos{" "}
              <span className="badge badge-secondary">
                {this.props.outstanding}
              </span>
            </h3>
          </div>
        </div>
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
                <TodoColumns todo={todo} onComplete={this.props.onComplete} />
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Todos;
