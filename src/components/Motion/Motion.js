import React, { useRef } from "react";

import MOne from "./MOne/MOne";

export default function Motion() {
  const modalRef = useRef();
  return (
    <div className="App">
      <button
        onClick={() => modalRef.current.open()}
        className="border-2 text-black font-bold"
      >
        Open Modal
      </button>
      <MOne ref={modalRef}>
        <h1 className="btn border-2 text-amber-300">Hello World</h1>
      </MOne>
    </div>
  );
}
