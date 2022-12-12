import React from "react";
import "./CartContainer.css";
import CartItem from "../CartItem/CartItem";

const CartContainer = ({ storeTotalPrice, onCartChange, storeName, storeAddress, cartItems }) => {

  const itemCards = cartItems.map((item) => {
    return (
      <CartItem
        id={item.userStoreItemId}
        key={item.storeItemId}
        itemName={item.itemName}
        quantity={item.quantity}
        photoUrl={item.itemPhotoUrl}
        itemTotal={item.itemTotal}
        onCartChange={onCartChange}
      />
    );
  });

  return (
  <section className="cart-container">
    <h2>{storeName}</h2>
    <p>{storeAddress}</p>
    <h3>Total: ${storeTotalPrice}</h3>
    <div>{itemCards}</div>
    </section>
  )
};

export default CartContainer;
