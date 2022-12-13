import React, { useContext, useEffect } from "react";
import CartContainer from "../CartContainer/CartContainer";
import { GET_CART } from "../../hooks/getQueries";
import { UserContext } from "../../context/userContext";
import { useQuery } from "@apollo/client";
import "./CartPage.css";

const CartPage = () => {
  const userId = useContext(UserContext);
  const { data, loading, error, refetch } = useQuery(GET_CART, {
    variables: {
      userId,
    },
  });

  useEffect(() => {
    refetch()
  })

  const handleCartChange = () => {
    refetch();
  };

  const nonEmptyStores = data?.userStoreItems.filter(
    (store) => store.listItems.length > 0
  );
  const cartsByStore = nonEmptyStores?.map((store) => {
    return (
      <CartContainer
        id={store.storeId}
        key={store.storeId}
        cartItems={store.listItems}
        storeTotalPrice={store.storeTotalPrice}
        storeName={store.name}
        storeAddress={store.address}
        onCartChange={handleCartChange}
      />
    );
  });

  return (
    <section className="cart-page">
      {loading && <p>Loading...</p>}
      {!loading && !error && cartsByStore}
      {error && <p>Error: {error}</p>}
    </section>
  );
};

export default CartPage;
