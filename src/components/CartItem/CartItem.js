import React from 'react';
import './CartItem.css';
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const CartItem = ({id, photoUrl, itemName, storeName, quantity, price, deleteItem}) => {
  const [quantity, setQuantity] = useState(1);

  const [deleteItem] = useMutation(DELETE_CART_MUTATION, {
    variables: {
      
    }
  })
  
  return (
    <section className='individual-cart-item'>
      <img src={photoUrl} alt="grocery-images"/>
      <p>{itemName}</p>
      <p>{storeName}</p>
      <p>{quantity}</p>
      <p>{price}</p>
      <button onClick={() => deleteItem(id)}>🗑</button>
    </section>
  )
}

export default CartItem;
