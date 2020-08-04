import React from "react";
import { CheckboxStyle } from "./styled";

const Checkbox = ({ name, value, onChange }) => {
  return (
    <span>
      <CheckboxStyle
        type="checkbox"
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <label htmlFor={name}>{value}</label>
    </span>
  );
};

export default Checkbox;
