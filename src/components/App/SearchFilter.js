import React, { useState, useEffect } from "react";
import Logo from '../../img/logo.png';
import './SearchFilter.style.scss';

const SearchFilter = ({ className }) => {
  const [searchValue, setSearchValue] = useState("");
  const [hotelPrices, sortHotelPrices] = useState([]);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = (e) => {
    e.preventDefault();
    setSearchValue("")
  }

  const sortAscending = () => {
  }

  return (
    <div className="filters">
      <img src={Logo} alt="rocketmiles-logo"/>
        <p>Hotel name:</p>
        <input type="text"
          className="input"
          value={searchValue}
          onChange={handleSearchChange}
         />
        <p>Sort By:</p>
        <select name="" className="select">
            <option value="">Recommended</option>
            <option value="" onClick={sortAscending}>Price low-to-high</option>
            <option value="">Price high-to-low</option>
        </select>
        <button className="button" onClick={resetInputField}>Reset</button>
    </div>
  );
}

export default SearchFilter;
