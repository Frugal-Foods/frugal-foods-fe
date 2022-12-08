import React from "react";
import StoreCard from "../StoreCard/StoreCard";
import './StoresContainer.css'

const StoresContainer = ({ stores }) => {
  if(!stores) {
    return null
  }
  const storeCards = stores.map((store) => {
    return (
      <StoreCard name={store.name} address={store.address} key={store.id} />
    );
  });

  return (
    <section className="stores-container">
      <div className="store-cards">{storeCards}</div>
    </section>
  );
};

export default StoresContainer;
