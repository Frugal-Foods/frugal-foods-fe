import React, { useContext, useEffect } from "react";
import StoreCard from "../StoreCard/StoreCard";
import "./StoresContainer.css";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { useQuery } from "@apollo/client";
import { GET_USER_STORES } from "../../hooks/getQueries";

const StoresContainer = ({ stores }) => {
  console.log(stores)
  const user = useContext(UserContext);
  const { data, loading, refetch } = useQuery(GET_USER_STORES, {
    variables: {
      userId: user,
    },
  });

  useEffect(() => {
    refetch();
  });

  const handleUserStoresChange = () => {
    refetch();
  };

  if (!stores || loading) {
    return null;
  }
  const storeCards = stores.map((store) => {
    const foundUserStore = data?.userStores.find(
      (userStore) => userStore.storeId === store.id
    );
    return (
      <StoreCard
        name={store.name}
        address={store.address}
        storeId={store.id}
        key={store.id}
        userStoreId={foundUserStore?.id}
        onChange={handleUserStoresChange}
      />
    );
  });

  return (
    <section className="stores-container">
      {storeCards.length > 0 && (
        <Link to={"/search"}>
          <button className="shop-btn">Start Shopping!</button>
        </Link>
      )}
      <div className="store-cards">{storeCards}</div>
    </section>
  );
};

export default StoresContainer;
