import React from "react";
import { StarIcon, HalfStarIcon } from "../../assets/image";

const Rating = ({ data, className, isMultiStarRequired }) => {
  const renderRatingStars = () => {
    let eleStarArr = [];
    if (isMultiStarRequired && data) {
      const checkForHalfStar = data % 1 !== 0;
      const updatedValue = checkForHalfStar ? Math.floor(data) + 1: data;
      for (let i = 0; i < updatedValue; i++) {
        if (checkForHalfStar && i + 1 === updatedValue) {
          eleStarArr.push(
            <div className="half-star-wrapper">
              <StarIcon className="star" />
              <HalfStarIcon className="half-star" />
            </div>
          );
        } else {
          eleStarArr.push(<StarIcon className="star" />);
        }
      }
    } else {
      eleStarArr.push(<StarIcon className="star" />);
    }

    return eleStarArr;
  };

  return (
    <div className={`rating ${className || ""}`}>
      {renderRatingStars()}
      <span>{isMultiStarRequired ? "" : data}</span>
    </div>
  );
};

export default Rating;
