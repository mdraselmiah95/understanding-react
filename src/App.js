import { useEffect, useState } from "react";
import "./App.css";
import Book from "./components/Book/Book";
import Device from "./components/Device/Device";

function App() {
  const [steps, setSteps] = useState(0);
  const books = [
    { name: "Small Giants", author: "roy" },
    { name: "Build to sell", author: "john" },
    { name: "Grind it", author: "Bay" },
    { name: "Shoe Dog", author: "Bo" },
  ];
  const handleIncreaseSteps = () => {
    // const newSteps = steps + 1;
    setSteps(steps + 1);
    console.log(steps);
  };
  useEffect(() => {
    // console.log("hello");
    console.log("steps");
  }, [steps]);

  return (
    <div className="App">
      <Device name="phone" steps={steps} price="13500" />
      <h3>npm= Node Package Manager </h3>
      <h4>command-line interface</h4>
      <h3>My Steps:{steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
      <br /> <br />
      <button>CLICK ME</button>
      <br />
      <Book></Book>
    </div>
  );
}

export default App;
