import React from "react";
import "./App.css";
import { CheckboxContainer } from "./styled";
import Checkbox from "./checkbox";

const checkboxes = [
  { name: "3d", value: "Scale 3D Sensor Fusion" },
  { name: "video", value: "Scale Video" },
  { name: "document", value: "Scale Document" },
  { name: "image", value: "Scale Image" },
  { name: "text", value: "Scale Text" },
];

function App() {
  const displayCheckboxes = checkboxes.map((checkbox, key) => {
    return <Checkbox key={key} name={checkbox.name} value={checkbox.value} />;
  });

  return (
    <div className="App">
      <p>Interested in</p>
      <CheckboxContainer>{displayCheckboxes}</CheckboxContainer>
    </div>
  );
}

export default App;
