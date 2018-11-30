import React from "react";
const TodoTableHeader = props => {
  const { onSort } = props;
  return (
    <thead>
      <tr>
        <th onClick={() => onSort("description")}>Description</th>
        <th onClick={() => onSort("assignedTo")}>Assigned To</th>
        <th onClick={() => onSort("dueDate")}>Due Date</th>
        <th onClick={() => onSort("status")}>Status</th>
      </tr>
    </thead>
  );
};

export default TodoTableHeader;
