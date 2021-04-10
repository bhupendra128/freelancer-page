import React, { useContext } from "react";
import Card from "../../presentation/card";
import "./listing.scss";
import { AppContext } from "../../context/AppContext";

const CardListing = () => {
  const [listingData] = useContext(AppContext);

  const renderList = () => {
    return listingData.map((item) => <Card key={item.id} data={item} />);
  };

  return <div className="c-card-listing">{renderList()}</div>;
};

export default CardListing;
