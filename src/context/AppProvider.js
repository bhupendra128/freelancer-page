import { useState, useEffect, useRef } from "react";
import { AppContext } from "./AppContext";
import { data } from "../assets/data";

/**
 * AppProvider Component that will create store your application state
 * @param  {object} having all required attributes children
 */

export const AppProvider = ({children}) => {
  const [listingData, setListingData] = useState([]);
  const [filterState, setFilterState] = useState([]);
  const initialData = useRef([]);

  useEffect(() => {
    // Actual API call
    setTimeout(() => {
      initialData.current = data;
      setListingData(data);
    }, 50);
  }, []);

  const finalObj = {
    listingData,
    filterState,
    initialData: initialData.current,
    setListingData,
    setFilterState,
  };
  return (
    <AppContext.Provider value={finalObj}>{children}</AppContext.Provider>
  );
};
