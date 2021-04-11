import React from "react";

/**
 * Link Component that will create link
 * @param  {object} having all required attributes such as link, label,children, className
 */

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
