import React, { useState } from "react";
import Rating from "../../atom/rating";
import Checkbox from "../../atom/checkbox";
import "./filter-modal.scss";
import Button from "../../atom/button";

const FilterModal = ({ data, handleSelectedFilter }) => {
  const [selectedCheckbox, setSelectedCheckBox] = useState([]);

  const handleCheckboxCallback = ({ id, checked, rating }) => {
    if (checked) {
      setSelectedCheckBox([...selectedCheckbox, { id, rating }]);
    } else {
      const filteredValue = selectedCheckbox.filter((itm) => itm.id !== id);
      setSelectedCheckBox(filteredValue);
    }
  };

  const handleSaveFilter = () => {
    handleSelectedFilter(selectedCheckbox);
  };

  const renderFilter = () => {
    return data.map((item) => {
      return (
        <div className="filter-item">
          <div className="content">
            <h3 className="heading-3">{item.title}</h3>
            <p className="description">
              <span>Budget: </span>
              <span>{item.budget} </span>
            </p>
          </div>
          <Rating isMultiStarRequired={true} data={item.rating} />
          <Checkbox
            id={item.id}
            handleCheckboxCallback={(id, checked) =>
              handleCheckboxCallback({ id, checked, rating: item.rating })
            }
          />
        </div>
      );
    });
  };

  return (
    <div className="c-filter-modal">
      <div className="filter-row">{renderFilter()}</div>
      <Button className="save" onClick={handleSaveFilter}>
        Save
      </Button>
    </div>
  );
};

export default FilterModal;
