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
  const [checkboxValues, setCheckboxValues] = useState([]);
  const [text, setText] = useState("");
  console.log("checkboxValues", checkboxValues);

  const updateCheckboxValues = (value) => {
    // Make shallow copy of checboxValues state
    const newCheckboxValues = [...checkboxValues];
    if (newCheckboxValues.includes(value)) {
      const valueIndex = newCheckboxValues.indexOf(value);
      newCheckboxValues.splice(valueIndex, 1);
    } else {
      newCheckboxValues.push(value);
    }
    setCheckboxValues(newCheckboxValues);
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
        <input type="text" onChange={(e) => setText(e.target.value)} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
