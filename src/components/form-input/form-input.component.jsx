import React from "react";

import "./form-input.styles.scss";

const labelClassName = (value) => {
  return value.lenght ? "shrink" : "";
};

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${labelClassName} form-input-label`}>{label}</label>
    ) : null}
  </div>
);

export default FormInput;
