import React, { Component } from "react";
import TodoColumns from "./todoColumns";
import TableHeader from "../common/tableHeader";
class TodosTable extends Component {
  render() {
    const { todos, onComplete, columns, onSort, sortColumn } = this.props;

    return (
      <table className="table">
        <TableHeader
          onSort={onSort}
          columns={columns}
          sortColumn={sortColumn}
        />
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
