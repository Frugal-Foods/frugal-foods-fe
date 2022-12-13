import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import "./CartItem.css";
import {
  DELETE_ITEM_MUTATION,
  UPDATE_CART_QUANTITY,
} from "../../hooks/postMutations";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const CartItem = ({
  id,
  photoUrl,
  itemName,
  itemTotal,
  quantity,
  onCartChange,
}) => {
  const [cartQuantity, setCartQuantity] = useState(quantity);

  const [deleteItem] = useMutation(DELETE_ITEM_MUTATION, {
    variables: {
      id: id,
    },
    onCompleted: () => {
      onCartChange();
    },
  });

  const [updateQuantity] = useMutation(UPDATE_CART_QUANTITY, {
    variables: {
      id: id,
    },
    onCompleted: (data) => {
      setCartQuantity(data.updateUserStoreItem.quantity);
      onCartChange();
    },
  });

  const handleQuantityIncrease = () => {
    updateQuantity({ variables: { quantity: cartQuantity + 1 } });
  };

  const handleQuantityDecrease = () => {
    if (cartQuantity > 1) {
      updateQuantity({ variables: { quantity: cartQuantity - 1 } });
    }
  };

  return (
    <section className="individual-cart-item">
      <img src={photoUrl} alt="grocery-images" />
      <p>{itemName}</p>
      <div className="quantity-select">
        <button>
          <FaChevronCircleLeft
            size={16}
            className="left-chevron"
            onClick={() => handleQuantityDecrease()}
          />
        </button>
        <span> {cartQuantity} </span>
        <button>
          <FaChevronCircleRight
            size={16}
            className="right-chevron"
            onClick={() => handleQuantityIncrease()}
          />
        </button>
      </div>
      <p>Item Total: ${itemTotal.toFixed(2)}</p>
      <button onClick={() => deleteItem(id)}>🗑</button>
    </section>
  );
};

export default CartItem;
