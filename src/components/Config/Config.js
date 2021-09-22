import React from "react";

const Config = (props) => {
  return (
    <div style={{ border: "2px solid pink", margin: "5px" }}>
      <ul>
        <li>price: {props.price}</li>
      </ul>
    </div>
  );
};

export default Config;
