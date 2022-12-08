import React from "react";
import "./SearchItem.css";
import { MdAddShoppingCart } from "react-icons/md"

const SearchItem = ({ itemName, photoUrl, price, storeName }) => {
  return (
    <section className="store-item-container">
      <div className="store-item-card">
        <h4 className="add-icon"> <MdAddShoppingCart size={22} onClick={() => alert("Item Added")} /> </h4>
        <img src={photoUrl} alt="grocery item" />
        <h3>${price} (est.)</h3>
        <h3>{itemName}</h3>
        <h3>Store: {storeName}</h3>
        <p>in stock</p>
      </div>
    </section>
  );
};

export default SearchItem;
