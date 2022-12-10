import React, {useState} from 'react';
import { useMutation } from "@apollo/client";
import './CartItem.css';
import { DELETE_ITEM_MUTATION } from '../../hooks/postMutations';
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const CartItem = ({id, photoUrl, itemName, itemTotal, quantity}) => {
  const [cartQuantity, setCartQuantity] = useState(1);

  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION, {
    variables: {
      id: id
    }
  })
  
  const handleQuantityIncrease = () => {
      setCartQuantity(cartQuantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setCartQuantity(cartQuantity - 1);
    }
  };

  return (
    <section className='individual-cart-item'>
      <img src={photoUrl} alt="grocery-images"/>
      <p>{itemName}</p>
      <div className="quantity-select">
          <button>
            <FaChevronCircleLeft
              size={16}
              className="left-chevron"
              onClick={() => handleQuantityDecrease()}
            />
          </button>
          <span> {quantity} </span>
          <button>
            <FaChevronCircleRight
              size={16}
              className="right-chevron"
              onClick={() => handleQuantityIncrease()}
            />
          </button>
        </div>
      <p>Item Total: ${itemTotal}</p>
      <button onClick={() => deleteItem(id)}>🗑</button>
    </section>
  )
}

export default CartItem;
