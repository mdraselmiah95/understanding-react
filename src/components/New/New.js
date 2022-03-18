import React, { useEffect, useState } from "react";

import Books from "../Books/Books";
import Device from "../Device/Device";

const New = () => {
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
    <div>
      <Device name="phone" steps={steps} price="13500" />
      <h3>npm= Node Package Manager </h3>
      <h4>command-line interface</h4>
      <h3>My Steps:{steps}</h3>
      <button onClick={handleIncreaseSteps}>Walk</button>
      <br /> <br />
      <button>CLICK ME</button>
      <br />
      <Books books={books} />
    </div>
  );
};

export default New;
