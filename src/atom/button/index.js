import React from "react";
import "./button.scss";

/**
 * Button Component that will create button
 * @param  {object} having all required attributes such as className, onClick, children
 */

const Button = ({ className, onClick, children }) => {
  return (
    <button className={`btn ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
