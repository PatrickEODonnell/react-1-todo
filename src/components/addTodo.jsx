import React, { Component } from "react";
import Input from "../common/input";
import { createTodo } from "../services/fakeToDoService";
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  state = {
    onAdd: this.props.onAdd,
    todo: { description: "", assignedTo: "", dueDate: "", status: "Incomplete" }
  };
  handleChange({ currentTarget: input }) {
    const todo = { ...this.state.todo };
    todo[input.name] = input.value;
    this.setState({ todo });
  }
  handleSubmit(e) {
    e.preventDefault();
    const { description, assignedTo, dueDate, status } = this.state.todo;
    const newTodo = createTodo();
    // pass back to parent
    newTodo.description = description;
    newTodo.assignedTo = assignedTo;
    newTodo.dueDate = dueDate;
    newTodo.status = status;
    this.props.onAdd(newTodo);
    console.log(newTodo);

    // reset the fields
    const todo = { ...this.state.todo };
    todo.description = "";
    todo.assignedTo = "";
    todo.dueDate = "";
    todo.status = "Incomplete";
    this.setState({ todo });
    console.log(todo);
  }

  render() {
    let { description, assignedTo, dueDate, status } = this.state.todo;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <h3>Add Todo</h3>
          <Input
            name="description"
            value={description}
            type="text"
            onChange={this.handleChange}
            label="Description"
          />
          <Input
            name="assignedTo"
            value={assignedTo}
            type="text"
            onChange={this.handleChange}
            label="Assigned To"
          />
          <Input
            name="dueDate"
            value={dueDate}
            type="text"
            onChange={this.handleChange}
            label="Due Date"
          />
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
