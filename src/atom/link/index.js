import React from "react";

const Link = ({ link, label,children, className }) => {
  if (!link ) {
    return null;
  }

  return (
    <a href={link} className={`link ${className}`}>
      {label ? label : ''}
      {children || ''}
    </a>
  );
};

export default Link;
