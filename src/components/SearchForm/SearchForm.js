import React, { useState } from "react";
import './SearchForm.css';

const SearchForm = ({ queryStoreItems }) => {
  const [searchValue, setSearchValue] = useState("");
  const [domError, setDomError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue) {
      queryStoreItems(searchValue);
      clearInputs();
    } else {
      setDomError("Please enter a grocery item");
    }
  };

  const clearInputs = () => {
    setSearchValue("");
    setDomError("");
  };

  return (
    <div>
      <h3>Find Grocery Items:</h3>
      <input
        type="text"
        placeholder="Enter Grocery Item"
        name="groceryItem"
        className="search-input"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button className="item-search-btn" onClick={(event) => handleSubmit(event)}>Search</button>
      {domError && <h4 className="error-message">{domError}</h4>}
    </div>
  );
};

export default SearchForm;
