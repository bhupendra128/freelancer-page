import React, { useContext, useCallback } from "react";
import Card from "../../presentation/card";
import { AppContext } from "../../context/AppContext";
import "./listing.scss";

/**
 * CardListing Component to render the list of Cards
 */
const CardListing = () => {
  const { listingData } = useContext(AppContext);

  const renderList = useCallback(() => {
    return listingData.map((item) => <Card key={item.id} data={item} />);
  }, [listingData]);

  return <div className="c-card-listing">{renderList()}</div>;
};

export default CardListing;
