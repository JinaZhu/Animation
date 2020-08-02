import React from "react";
import { CheckboxStyle } from "./styled";

const Checkbox = ({ name, value }) => {
  return (
    <span>
      <CheckboxStyle type="checkbox" name={name} value={value} />
      <label htmlFor={name}>{value}</label>
    </span>
  );
};

export default Checkbox;
