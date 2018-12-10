import React from "react";
import { ToastContainer } from "react-toastify";
import Form from "../common/form";
import Joi from "joi-browser";
import { createTodo } from "../services/fakeToDoService";
import { toast } from "react-toastify";
import httpService from "../services/httpService";
import config from "../config.json";

class AddTodo extends Form {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    onAdd: this.props.onAdd,
    data: {
      id: "",
      description: "",
      assignedTo: "",
      dueDate: "",
      status: "Incomplete"
    },
    errors: {}
  };
  schema = {
    description: Joi.string()
      .required()
      .label("Description"),
    assignedTo: Joi.string()
      .required()
      .label("Assigned To"),
    dueDate: Joi.string()
      .required()
      .label("Due Date"),
    status: Joi.string()
      .required()
      .label("Status"),
    id: Joi.allow("")
  };
  addTodo = async todo => {
    try {
      const { data: post } = await httpService.post(config.apiEndPoint, todo);
      this.props.history.replace("/todos");
    } catch (ex) {
      console.log("Add Todo Error: " + ex);
    }
  };
  doSubmit = () => {
    const { description, assignedTo, dueDate, status } = this.state.data;
    const newData = createTodo();
    // save the new Todo
    newData.description = description;
    newData.assignedTo = assignedTo;
    newData.dueDate = dueDate;
    newData.status = status;
    this.addTodo(newData);
  };
  render() {
    let { status } = this.state.data;
    return (
      <React.Fragment>
        <ToastContainer />
        <form onSubmit={this.handleSubmit}>
          <h3>Add data</h3>
          {this.renderInput("description", "Description")}
          {this.renderInput("assignedTo", "Assigned To")}
          {this.renderInput("dueDate", "Due Date")}
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
                    checked={status === "Incomplete"}
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
                    checked={status === "Complete"}
                  />
                  <label className="form-check-label" htmlFor="status2">
                    Complete
                  </label>
                </div>
              </div>
            </div>
          </fieldset>
          <div className="form-group row">
            <div className="col-sm-10">{this.renderButton("Add")}</div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddTodo;
