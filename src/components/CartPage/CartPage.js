import React, { useContext } from "react";
import CartContainer from "../CartContainer/CartContainer";
import { useCartItems } from "../../hooks/getQueries";
import { UserContext } from "../../context/userContext";
import "./CartPage.css";

const CartPage = () => {
  const userId = useContext(UserContext);
  const { data, loading, error } = useCartItems(userId);

  const cartsByStore = data?.userStoreItems.map((store) => {
    return (
      <CartContainer
        id={store.storeId}
        key={store.storeId}
        cartItems={store.listItems}
        storeTotalPrice={store.storeTotalPrice}
        storeName={store.name}
        storeAddress={store.address}
        deleteItem={deleteItem}
      />
    );
  });

  return (
    <section className="cart-page">
      {loading && <p>Loading...</p>}
      {cartsByStore}
      {!loading && !error && cartsByStore}
      {error && <p>Error: {error}</p>}
    </section>
  );
};

export default CartPage;
