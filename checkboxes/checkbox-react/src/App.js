import React from "react";
import "./App.css";
import { CheckboxContainer } from "./styled";
import Checkbox from "./checkbox";

function App() {
  return (
    <div className="App">
      <p>Interested in</p>
      <CheckboxContainer>
        <Checkbox name="3D" value="Scale 3D Sensor Fusion" />
        <Checkbox name="video" value="Scale Video" />
        <Checkbox name="document" value="Scale Document" />
        <Checkbox name="image" value="Scale Image" />
        <Checkbox name="text" value="Scale Text" />
      </CheckboxContainer>
    </div>
  );
}

export default App;
