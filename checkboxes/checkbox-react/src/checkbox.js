import React from "react";
import { CheckboxStyle } from "./styled";

const Checkbox = ({ name, value, setCheckBoxes }) => {
  console.log("value", value);
  return (
    <span>
      <CheckboxStyle
        type="checkbox"
        name={name}
        value={value}
        onChange={(e) => setCheckBoxes(e.target.value)}
      />
      <label htmlFor={name}>{value}</label>
    </span>
  );
};

export default Checkbox;
