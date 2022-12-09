import React from "react";
import SearchItem from "../SearchItem/SearchItem";

const SearchContainer = ({ items }) => {
  if (!items) {
    return null;
  }
  const storeItemCards = items.map((item) => {
    return (
      <SearchItem
        id={parseInt(item.storeItemId)}
        key={item.storeItemId}
        itemName={item.itemName}
        photoUrl={item.photoUrl}
        storeName={item.storeName}
        price={item.price}
      />
    );
  });
  return <section className="item-results-container">{storeItemCards}</section>;
};

export default SearchContainer;
