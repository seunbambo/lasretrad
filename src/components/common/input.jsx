import React from "react";

const Input = ({ name, label, error, value, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>
        {label} <sup className="text-danger">*</sup>
      </label>
      <div className="input-group input-group-sm">
        <input
          className="py-4 form-control"
          value={value}
          onChange={onChange}
          id={name}
          name={name}
          type="text"
          autoComplete="off"
          //required
        />
      </div>
      {error && <small className="text-danger">{error}</small>}
    </div>
  );
};

export default Input;
