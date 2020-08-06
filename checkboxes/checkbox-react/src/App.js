import React, { useState } from "react";
import "./App.css";
import { CheckboxContainer } from "./styled";
import Checkbox from "./Checkbox";

const checkboxes = [
  { name: "3d", value: "Scale 3D Sensor Fusion" },
  { name: "video", value: "Scale Video" },
  { name: "document", value: "Scale Document" },
  { name: "image", value: "Scale Image" },
  { name: "text", value: "Scale Text" },
];

function App() {
  const [formValues, setFormValues] = useState({
    fname: "",
    lname: "",
    interests: [],
  });

  const updateCheckboxValues = (value) => {
    // Make shallow copy of checboxValues state
    const newCheckboxValues = [...formValues.interests];
    if (newCheckboxValues.includes(value)) {
      const valueIndex = newCheckboxValues.indexOf(value);
      newCheckboxValues.splice(valueIndex, 1);
    } else {
      newCheckboxValues.push(value);
    }
    handleChange("interests", newCheckboxValues);
  };

  const handleChange = (formField, formValue) => {
    // const updatedFormValues = { ...formValues };
    // updatedFormValues[formField] = formValue;

    const updatedFormValues = {
      ...formValues,
      [formField]: formValue,
    };

    setFormValues(updatedFormValues);
  };

  const displayCheckboxes = checkboxes.map((checkbox, key) => {
    return (
      <Checkbox
        key={key}
        name={checkbox.name}
        value={checkbox.value}
        onChange={updateCheckboxValues}
      />
    );
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <div className="App">
      <p>Interested in</p>
      <form>
        <CheckboxContainer>{displayCheckboxes}</CheckboxContainer>
        <label htmlFor="first-name">First Name:</label>
        <input
          type="text"
          name="first-name"
          onChange={(e) => handleChange("fname", e.target.value)}
        />
        <br />
        <label htmlFor="last-name">Last Name:</label>
        <input
          type="text"
          name="last-name"
          onChange={(e) => handleChange("lname", e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
      <code>{JSON.stringify(formValues)}</code>
    </div>
  );
}

export default App;
