import React from "react";
import CartContainer from "../CartContainer/CartContainer";
import "./CartPage.css";

const CartPage = ({ cartItems, removeItem }) => {
  return (
    <section className="cart-page">
      <CartContainer cartItems={cartItems} removeItem={removeItem} />
    </section>
  );
};

export default CartPage;
