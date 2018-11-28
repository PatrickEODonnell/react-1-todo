import React, { Component } from "react";
import TodoColumns from "./todoColumns";
import TodosHeading from "./todosHeading";

class Todos extends Component {
  render() {
    const { todos, onComplete, outstanding } = this.props;
    return (
      <React.Fragment>
        <TodosHeading outstanding={outstanding} />
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
            {todos.map(todo => (
              <tr key={todo._id}>
                <TodoColumns todo={todo} onComplete={onComplete} />
              </tr>
            ))}
          </tbody>
        </table>
        {/* <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="#">
                3
              </a>
            </li>
          </ul>
        </nav> */}
      </React.Fragment>
    );
  }
}

export default Todos;
