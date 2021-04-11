import React from "react";
import "./specializations.scss";

/**
 * Specializations Component that will create Specializations
 * @param  {object} having all required attributes such as   data, className
 */

const Specializations = ({ data, className }) => {
  if (!data && !data.length) {
    return null;
  }
  return (
    <div className={`c-specializations ${className || ""}`}>
      <span>{data.join(", ")}</span>
    </div>
  );
};

export default Specializations;
