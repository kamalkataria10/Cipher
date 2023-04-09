import React, { children, useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div
        className="bg-gray-200 fixed inset-x-0 inset-y-0 opacity-80"
        onClick={closeModal}
      ></div>
      <div className="bg-white fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 w-6/12">
        {children}
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Modal;
