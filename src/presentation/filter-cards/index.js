import React, { useState, useContext, useCallback } from "react";
import Rating from "../../atom/rating";
import Checkbox from "../../atom/checkbox";
import { AppContext } from "../../context/AppContext";
import Button from "../../atom/button";
import "./filter-cards.scss";

/**
 * Card Component that will create card of the user
 * @param  {object} having all required attributes data
 */

const FilterCards = ({ data, handleSelectedFilter }) => {
  const { filterState, setFilterState } = useContext(AppContext);
  const [selectedCheckbox, setSelectedCheckBox] = useState(filterState || []);

  const handleCheckboxCallback = ({ id, checked, rating }) => {
    if (checked) {
      setSelectedCheckBox([...selectedCheckbox, { id, rating }]);
    } else {
      const filteredValue = selectedCheckbox.filter((itm) => itm.id !== id);
      setSelectedCheckBox(filteredValue);
    }
  };

  const handleSaveFilter = useCallback(() => {
    handleSelectedFilter(selectedCheckbox);
    setFilterState(selectedCheckbox);
  }, [selectedCheckbox, handleSelectedFilter, setFilterState]);

  const checkForDefaultValue = (id) => {
    const findValue = selectedCheckbox.find((itm) => itm.id === id) || {};
    return Boolean(Object.keys(findValue).length);
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
            checked={checkForDefaultValue(item.id)}
            handleCheckboxCallback={(id, checked) =>
              handleCheckboxCallback({ id, checked, rating: item.rating })
            }
          />
        </div>
      );
    });
  };

  return (
    <div className="c-filter-cards">
      <div className="filter-row">{renderFilter()}</div>
      <Button className="save" onClick={handleSaveFilter}>
        Save
      </Button>
    </div>
  );
};

export default FilterCards;
