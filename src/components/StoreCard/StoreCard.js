import React, { useState } from "react";
import "./StoreCard.css";
import { CREATE_USER_STORE } from "../../hooks/postMutations";
import { DELETE_STORE_MUTATION } from "../../hooks/postMutations";
import { useMutation } from "@apollo/client";

const StoreCard = ({ id, name, address }) => {
  console.log(id, name, address)
  const [checked, setChecked] = useState(false);
  const [addStore] = useMutation(CREATE_USER_STORE, {
    variables: {
      userId: 5,
      storeId: id
    }
  })
  const [deleteStore] = useMutation(DELETE_STORE_MUTATION, {
    variables: {
      id: id
    }
  })

  const handleChecked = (id) => {
    setChecked(!checked);
    if(!checked) {
      addStore(id);
    } else if(checked) {
      deleteStore(id)
    }
  };

  return (
    <div>
      <section className="individual-store-card" key={id}>
        <input type="checkbox" checked={checked} onChange={() => handleChecked(id)} />
        <p>{name}</p>
        <p>{address}</p>
      </section>
        {/* <button onClick={() => addStore()}>Start Shopping</button> */}
    </div>
  );
};

export default StoreCard;
