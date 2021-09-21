import { useState } from "react";
import "./App.css";
import Device from "./components/Device/Device";

function App() {
  const [steps, setSetsps] = useState([]);
  return (
    <div className="App">
      <Device name="phone" price="13500" />
      <h3>npm= Node Package Manager </h3>
      <h4>command-line interface</h4>
      <button>CLICK ME</button>
    </div>
  );
}

export default App;
