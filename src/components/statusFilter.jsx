import React from "react";

const StatusFilter = ({ onFilterChange, statusFilter }) => {
  return (
    <React.Fragment>
      <div className="btn-group btn-group-toggle" data-toggle="buttons">
        <label
          className={
            statusFilter === "All" || statusFilter === ""
              ? "btn btn-secondary active"
              : "btn btn-secondary"
          }
        >
          <input
            type="radio"
            name="options"
            id="option1"
            autoComplete="off"
            value="All"
            onChange={onFilterChange}
            checked={statusFilter === "All" || statusFilter === ""}
          />
          All
        </label>
        <label
          className={
            statusFilter === "Complete"
              ? "btn btn-secondary active"
              : "btn btn-secondary"
          }
        >
          <input
            type="radio"
            name="options"
            id="option2"
            autoComplete="off"
            value="Complete"
            onChange={onFilterChange}
            checked={statusFilter === "Complete"}
          />
          Complete
        </label>
        <label
          className={
            statusFilter === "Incomplete"
              ? "btn btn-secondary active"
              : "btn btn-secondary"
          }
        >
          <input
            type="radio"
            name="options"
            id="option3"
            autoComplete="off"
            value="Incomplete"
            onChange={onFilterChange}
            checked={statusFilter === "Incomplete"}
          />
          Outstanding
        </label>
      </div>
    </React.Fragment>
  );
};

export default StatusFilter;
