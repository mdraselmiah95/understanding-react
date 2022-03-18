import React from "react";
import Model from "./Model/Model";

const NewModal = () => {
  const [showModal, setShowModal] = React.useState(false);
  const img = "https://i.ibb.co/3vWgJ9x/lobby.jpg";
  return (
    <div className="items-center justify-center mx-auto">
      <img
        src={img}
        alt=""
        className="w-32 mx-auto h-28"
        type="button"
        onClick={() => setShowModal(true)}
      />
      {showModal ? (
        <>
          <Model setShowModal={setShowModal} />
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </div>
  );
};

export default NewModal;
