import React from "react";

import "./form-input.styles.scss";

const labelClassName = (otherProps) => {
  return otherProps.value.length ? "shrink" : "";
};

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {label ? (
      <label className={`${labelClassName(otherProps)} form-input-label`}>
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
