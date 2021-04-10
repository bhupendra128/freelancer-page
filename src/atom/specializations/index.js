import React from "react";
import './specializations.scss';

const Specializations = ({ data , className }) => {
  if (!data && !data.length) {
    return null;
  }
  return <div className={`c-specializations ${className || ''}`}><span>{data.join(", ")}</span></div>;
};

export default Specializations;
