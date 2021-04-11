import React, { useState, useContext } from "react";
import Button from "../../atom/button";
import { HamburgerIcon, SearchIcon, FilterIcon } from "../../assets/image";
import Modal from "../../atom/modal";
import { filterData } from "../../assets/data";
import FilterCards from "../../presentation/filter-cards";
import { AppContext } from "../../context/AppContext";
import { ToastContainer, toast } from 'react-toastify';
import "./header.scss";
import 'react-toastify/dist/ReactToastify.css';

/**
 * Header Component that will create header
 */

const Header = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const { setListingData,initialData,} = useContext(AppContext);

  const handleFilterClick = () => {
    const bodyEle = window && window.document.body;
    bodyEle.classList.add('no-scroll');
    setIsModalOpened(true);
  };

  const handleSearchClick = () => {
    toast("Coming Soon");
  }

  const handleSelectedFilter = (arr) => {
    let minimumRating = arr && arr.length ? arr[0].rating: '';
    if(arr && arr.length > 1){
      for(let val of arr){
        if(val['rating'] < minimumRating){
          minimumRating = val['rating'];
        }
      }
    }
    const updatedListingData = initialData.filter(itm=>itm.avg_ratings >= minimumRating);
    setListingData(updatedListingData);
    const bodyEle = window && window.document.body;
    if(bodyEle.classList.contains('no-scroll')){
      bodyEle.classList.remove('no-scroll');
    }
    
    setIsModalOpened(false);
  };

  return (
    <div className="c-header">
    <ToastContainer />
      <div className="header-content">
        <Button>
          <HamburgerIcon />
        </Button>
        <h2 className="heading-2"> Freelancer</h2>
        <div className="icons">
          <Button onClick={handleSearchClick}>
            <SearchIcon />
          </Button>
          <Button onClick={handleFilterClick}>
            <FilterIcon />
          </Button>
        </div>
      </div>
      {isModalOpened && (
        <Modal>
          <FilterCards
            data={filterData}
            handleSelectedFilter={handleSelectedFilter}
          />
        </Modal>
      )}
    </div>
  );
};

export default Header;
