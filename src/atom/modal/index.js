import React from "react";
import "./modal.scss";

/**
 * Modal Component that will create modal
 * @param  {object} having all required attributes such as className, children
 */

const Modal = ({ className, children }) => {
  return (
    <div className={`modal-wrapper ${className || ""}`}>
      <div className="modal">
        <div className="separator" />
        {children}
      </div>
    </div>
  );
};

export default Modal;
