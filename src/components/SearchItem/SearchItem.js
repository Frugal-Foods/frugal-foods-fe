import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_CART_MUTATION } from "../../hooks/postMutations";
// import { UserContext } from "../../context/userContext";
import "./SearchItem.css";
import { MdAddShoppingCart } from "react-icons/md";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";

const SearchItem = ({ id, itemName, photoUrl, price, storeName }) => {
  // const user = useContext(UserContext);
  const [quantity, setQuantity] = useState(1);
  const [addCart] = useMutation(ADD_CART_MUTATION, {
    variables: {
      userId: 5,
      storeItemId: id,
      quantity,
    },
  });

  const handleQuantityIncrease = () => {
    if (quantity < 5) {
      setQuantity(quantity + 1);
    }
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <section className="store-item-container">
      <div className="store-item-card">
        <h4 className="add-icon">
          {" "}
          <MdAddShoppingCart size={22} onClick={() => addCart()} />{" "}
        </h4>
        <img src={photoUrl} alt="grocery item" />
        <h3>${price} (est.)</h3>
        <h3>{itemName}</h3>
        <h3>{storeName}</h3>
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
      </div>
    </section>
  );
};

export default SearchItem;
