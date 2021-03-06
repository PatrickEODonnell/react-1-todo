import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./input";
class Form extends Component {
  state = {
    data: {},
    errors: {}
  };
  validate = () => {
    const errors = {};
    const { data } = this.state;
    const result = Joi.validate(data, this.schema);
    if (!result.error) return null;
    for (let item of result.error.details) {
      errors[item.path[0]] = item.message;
    }
    console.log(errors);
    return errors;
  };
  validateProperty = ({ name, value }) => {
    //console.log(value, value.trim === "");
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };
  handleSubmit(e) {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (errors) return;
    this.doSubmit();
  }
  handleChange({ currentTarget: input }) {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    this.setState({ errors });

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, errors });
  }
  renderButton(label) {
    return (
      <button disabled={this.validate()} className="btn btn-primary">
        {label}
      </button>
    );
  }
  renderInput(name, label, type = "text") {
    const { errors, data } = this.state;

    return (
      <Input
        name={name}
        value={data[name]}
        type={type}
        onChange={this.handleChange}
        label={label}
        error={errors ? errors[name] : ""}
      />
    );
  }
}

export default Form;
