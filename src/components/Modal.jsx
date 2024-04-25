import React from "react";

const Modal = ({ modal, setModal }) => {
  return (
    <div className="">
      <button onClick={setModal((pre) => !pre)}>open</button>
    </div>
  );
};

export default Modal;
