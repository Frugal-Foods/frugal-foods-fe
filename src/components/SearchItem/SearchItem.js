import React from "react";
import "./SearchItem.css";

const SearchItem = ({ name, photoUrl, price, storeName }) => {
  return (
    <section className="store-item-card">
      <img src={photoUrl} alt="grocery item" />
      <p>{name}</p>
      <p>Store: {storeName}</p>
      <p>${price}</p>
    </section>
  );
};

export default SearchItem;
