import React, { Component } from "react";
import TodoColumns from "./todoColumns";
import TodosHeading from "./todosHeading";
import StatusFilter from "./statusFilter";
class Todos extends Component {
  render() {
    const {
      todos,
      onComplete,
      outstanding,
      statusFilter,
      onFilterChange
    } = this.props;
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-6">
            <TodosHeading outstanding={outstanding} />
          </div>
          <div className="col-md-6">
            <StatusFilter
              statusFilter={statusFilter}
              onFilterChange={onFilterChange}
            />
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
