import React from "react";
import "./SearchItem.css";

const SearchItem = ({ itemName, photoUrl, price, storeName }) => {
  return (
    <section className="store-item-card">
      <img src={photoUrl} alt="grocery item" />
      <p>{itemName}</p>
      <p>Store: {storeName}</p>
      <p>${price}</p>
    </section>
  );
};

export default SearchItem;
