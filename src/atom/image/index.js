import React from "react";
import "./image.scss";

/**
 * Image Component that will create image
 * @param  {object} having all required attributes such as image
 */

const Image = ({ image }) => {
  return (
    <img
      src={image.src}
      alt={image.alt || "alt"}
      className={`image ${image.className}`}
    />
  );
};

export default Image;
