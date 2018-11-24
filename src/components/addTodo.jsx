import React, { Component } from "react";
class AddTodo extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h3>Add Todo</h3>
        <div className="form-group row">
          <label htmlFor="description" className="col-sm-2 col-form-label">
            Description
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="description" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="assignedTo" className="col-sm-2 col-form-label">
            Assigned To
          </label>
          <div className="col-sm-10">
            <input type="text" className="form-control" id="assignedTo" />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="dueDate" className="col-sm-2 col-form-label">
            Due Date
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="dueDate"
              placeholder="yyyy-mm-dd"
            />
          </div>
        </div>
        <fieldset className="form-group">
          <div className="row">
            <legend className="col-form-label col-sm-2 pt-0">Complete</legend>
            <div className="col-sm-10">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="status1"
                  value="Incomplete"
                />
                <label className="form-check-label" htmlFor="status1">
                  Incomplete
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="status"
                  id="status2"
                  value="Complete"
                />
                <label className="form-check-label" htmlFor="status2">
                  Complete
                </label>
              </div>
            </div>
          </div>
        </fieldset>
        <div className="form-group row">
          <div className="col-sm-10">
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default AddTodo;
