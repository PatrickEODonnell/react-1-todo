import React, { Component } from "react";
import TodoColumns from "./todoColumns";
import TodoTableHeader from "./todoTableHeader";
class TodosTable extends Component {
  raiseSort = column => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.column === column) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.column = column;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };
  render() {
    const { todos, onComplete } = this.props;

    return (
      <table className="table">
        <TodoTableHeader onSort={this.raiseSort} />
        <tbody>
          {todos.map(todo => (
            <tr key={todo._id}>
              <TodoColumns todo={todo} onComplete={onComplete} />
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default TodosTable;
