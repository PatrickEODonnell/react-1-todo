import React, { Component } from "react";
// import TodoColumns from "./todoColumns";
import TableBody from "../common/tableBody";
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
        <TableBody data={todos} columns={columns} onComplete={onComplete} />
      </table>
    );
  }
}

export default TodosTable;
