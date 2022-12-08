import React, { useState } from "react";
import "./SearchItem.css";
import { MdAddShoppingCart } from "react-icons/md"
import { useMutation } from "@apollo/client";
import { CREATE_USER_STORE_ITEM } from "../../hooks/mutations";

const SearchItem = ({ itemName, photoUrl, price, storeName, itemId }) => {
    // const [quantity, setQuantity] = useState(0)

    const [postUserItem, {userId, storeItemId, quantity}] = useMutation(CREATE_USER_STORE_ITEM)
    console.log(postUserItem)

    const handlePost = (userId, storeItemId, quantity) => {
        postUserItem({
            variables: {
                userId: userId, 
                storeItemId: storeItemId,
                quantity: quantity++
            }
        })
    }

  return (
    <section className="store-item-container">
      <div className="store-item-card">
        <h4 className="add-icon"> <MdAddShoppingCart size={22} onClick={() => handlePost()} /> </h4>
        <img src={photoUrl} alt="grocery item" />
        <h3>${price} (est.)</h3>
        <h3>{itemName}</h3>
        <h3>Store: {storeName}</h3>
        <p>in stock</p>
      </div>
    </section>
  );
};

export default SearchItem;
