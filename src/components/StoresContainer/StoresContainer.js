import React from "react";
import StoreCard from "../StoreCard/StoreCard";
import './StoresContainer.css'
import { Link } from 'react-router-dom'
import { useUserStores } from "../../hooks/getQueries";

const StoresContainer = ({ stores }) => {
  console.log(stores)

  if(!stores) {
    return null
  }
  const storeCards = stores.map((store) => {
    return (
      <StoreCard name={store.name} address={store.address} id={store.id} key={store.id} />
    );
  });

  return (
    <section className="stores-container">
      <div className="store-cards">{storeCards}</div>
      <Link to={'/search'}>
      <button>Start Shopping!</button>
      </Link>
    </section>
  );
};

export default StoresContainer;
