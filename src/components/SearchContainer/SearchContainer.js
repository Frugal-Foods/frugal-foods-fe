import React from "react";
import SearchItem from "../SearchItem/SearchItem";

const SearchContainer = ({ storeItems }) => {
  const storeItemCards = storeItems.map((item) => {
    return (
      <SearchItem
        id={item.id}
        key={item.id}
        name={item.name}
        photoUrl={item.photoUrl}
        price={item.stores[0].storeProducts[0].price}
        storeName={item.stores[0].name}
      />
    );
  });
  return <section className="item-results-container">{storeItemCards}</section>;
};

export default SearchContainer;
