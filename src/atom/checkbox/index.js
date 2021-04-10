import React from "react";
import "./checkbox.scss";

const Checkbox = (props) => {
  const { id, handleCheckboxCallback } = props;
  const handleOnChange = (e) => {
    handleCheckboxCallback(parseInt(e.target.id), e.target.checked);
  };

  return (
    <div class="checkbox">
      <input type="checkbox" id={id} onChange={handleOnChange} />
      <label for={id}>{props.label || ""}</label>
    </div>
  );
};

export default Checkbox;
