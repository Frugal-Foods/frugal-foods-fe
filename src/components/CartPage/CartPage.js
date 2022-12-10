import React from "react";
import CartContainer from "../CartContainer/CartContainer";
import "./CartPage.css";
import { useCartItems } from "../../hooks/getQueries";
// import { UserContext } from '../../context/userContext'

const CartPage = () => {
  // const userId = useContext(UserContext)
  const { data, loading, error } = useCartItems(5);

  const removeItem = (id) => {
    //Mutation from graphql
  };

  return (
    <section className="cart-page">
      <h2>Grocery List</h2>
      {loading && <p>Loading...</p>}
      {!loading && !error && (
        <CartContainer
          cartItems={data?.userStoreItems}
          removeItem={removeItem}
        />
      )}
      {error && <p>Error: {error}</p>}
    </section>
  );
};

export default CartPage;
