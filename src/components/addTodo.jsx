import React, { Component } from "react";
import { createTodo } from "../services/fakeToDoService";
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    onAdd: this.props.onAdd,
    description: "",
    assignedTo: "",
    dueDate: "",
    status: "Incomplete"
  };
  handleChange(e) {
    //this.setState({ text: e.target.value });
    console.log(e.target.value, e.target);
    if (e.target.id === "description") {
      this.setState({ description: e.target.value });
    }
    if (e.target.id === "assignedTo") {
      this.setState({ assignedTo: e.target.value });
    }
    if (e.target.id === "dueDate") {
      this.setState({ dueDate: e.target.value });
    }
    if (e.target.id === "status1" || e.target.id === "status2") {
      this.setState({ status: e.target.value });
    }
  }
  handleSubmit(e) {
    console.log("handleSubmit");
    e.preventDefault();
    const newTodo = createTodo();
    newTodo.description = this.state.description;
    newTodo.assignedTo = this.state.assignedTo;
    newTodo.dueDate = this.state.dueDate;
    this.props.onAdd(newTodo);
    this.setState({ status: "Incomplete" });
    this.setState({ description: "" });
    this.setState({ assignedTo: "" });
    this.setState({ dueDate: "" });
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h3>Add Todo</h3>
          <div className="form-group row">
            <label htmlFor="description" className="col-sm-2 col-form-label">
              Description
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="description"
                value={this.state.description}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="assignedTo" className="col-sm-2 col-form-label">
              Assigned To
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="assignedTo"
                value={this.state.assignedTo}
                onChange={this.handleChange}
              />
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
                value={this.state.dueDate}
                onChange={this.handleChange}
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
                    onChange={this.handleChange}
                    checked
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
                    onChange={this.handleChange}
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
        </form>
      </React.Fragment>
    );
  }
}

export default AddTodo;
