import React from 'react';
import './CartItem.css';

const CartItem = ({id, itemName, storeName, quantity, price, removeItem}) => {
  return (
    <section className='individual-cart-item'>
      <p>{itemName}</p>
      <p>{storeName}</p>
      <p>{quantity}</p>
      <p>{price}</p>
      <button onClick={() => removeItem(id)}>🗑</button>
    </section>
  )
}

export default CartItem;
