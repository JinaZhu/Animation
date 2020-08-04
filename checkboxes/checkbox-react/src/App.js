import React, { useState } from "react";
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

// POST about/scale-products
['scale 3d sensor fusion', 'scale video', 'scale document']

// POST contracts/agreements
{
  binding: true, 
  fullDiscount: true, 
  arbitration: false
}

function App() {
  const [checkboxes, setCheckboxes] = useState([]);
  const [text, setText] = useState("");

  const displayCheckboxes = checkboxes.map((checkbox, key) => {
    return (
      <Checkbox
        key={key}
        name={checkbox.name}
        value={checkbox.value}
        setCheckboxes={setCheckboxes}
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
