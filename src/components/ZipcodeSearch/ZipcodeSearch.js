import React, { useState } from "react";

const ZipcodeSearch = ({ queryStores, onResetSearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const [domError, setDomError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue.length >= 5) {
      queryStores(searchValue);
      clearInputs();
    } else {
      setDomError("Enter a 5 digit zipcode");
    }
  };

  const clearInputs = () => {
    setSearchValue("");
    setDomError("");
  };

  return (
    <div className="find-store-container">
      <h3>Find Grocery Stores Near You: </h3>
      <input
        type="text"
        placeholder="Enter zipcode"
        name="zipcode"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={(event) => handleSubmit(event)}>Find Stores</button>
      <button onClick={() => onResetSearch()}>Reset All</button>
      {domError && <h4 className="error-message">{domError}</h4>}
    </div>
  );
};

export default ZipcodeSearch;
