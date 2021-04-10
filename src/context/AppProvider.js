import { useState, useEffect, useRef } from "react";
import { AppContext } from "./AppContext";
import { data } from "../assets/data";

export const AppProvider = (props) => {
  const [listingData, setListingData] = useState([]);
  const initialData = useRef([]);

  useEffect(() => {
    // Actual API call
    setTimeout(() => {
      initialData.current = data;
      setListingData(data);
    },50);
  }, []);
console.log(initialData.current,'initialData.current');

  return (
    <AppContext.Provider
      value={[listingData, setListingData, initialData.current]}
    >
      {props.children}
    </AppContext.Provider>
  );
};
