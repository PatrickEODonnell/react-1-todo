import React from "react";
const TodosHeading = ({ outstanding }) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <h3>
          Todos <span className="badge badge-secondary">{outstanding}</span>
        </h3>
      </div>
    </div>
  );
};

export default TodosHeading;
