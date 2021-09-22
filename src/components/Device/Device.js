import React from "react";
import Config from "../Config/Config";

const Device = (props) => {
  return (
    <div style={{ border: "2px solid gray", margin: "5px" }}>
      <h2>My Device: {props.name}</h2>
      <Config price={props.price} />
    </div>
  );
};

export default Device;
