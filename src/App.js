import { useState } from "react";
import "./App.css";
import Device from "./components/Device/Device";

function App() {
  const [steps, setSteps] = useState(0);
  const handleIncreaseSteps = () => {
    const newSteps = steps + 1;
    setSteps(newSteps);
  };
  return (
    <div className="App">
      <Device name="phone" price="13500" />
      <h3>npm= Node Package Manager </h3>
      <h4>command-line interface</h4>

      <h3>My Steps:{steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
      <br />
      <button>CLICK ME</button>
    </div>
  );
}

export default App;
