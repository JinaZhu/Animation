import React from "react";

const Checkbox = ({ name, value }) => {
  return (
    <span>
      <input type="checkbox" name={name} value={value} />
      <label for={name}>{value}</label>
    </span>
  );
};

export default Checkbox;
