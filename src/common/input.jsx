import React from "react";
const Input = ({ name, type, value, label, onChange }) => {
  return (
    <div className="form-group row">
      <label htmlFor={name} className="col-sm-2 col-form-label">
        {label}
      </label>
      <div className="col-sm-10">
        <input
          type={type}
          className="form-control"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;
