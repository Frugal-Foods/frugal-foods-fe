import React from "react";
import "./CartContainer.css";
import CartItem from "../CartItem/CartItem";

const CartContainer = ({ cartItems, removeItem }) => {
  const itemCards = cartItems.map((item) => {
    return (
      <CartItem
        id={item.id}
        key={item.id}
        itemName={item.itemName}
        storeName={item.storeName}
        quantity={item.quantity}
        price={item.price}
        removeItem={removeItem}
      />
    );
  });

  return <section className="cart-container">{itemCards}</section>;
};

export default CartContainer;
