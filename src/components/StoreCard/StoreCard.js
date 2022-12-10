import React, { useState } from "react";
import "./StoreCard.css";
import { CREATE_USER_STORE } from "../../hooks/postMutations";
import { useMutation } from "@apollo/client";

const StoreCard = ({ id, name, address }) => {
  console.log(id, name, address)
  const [checked, setChecked] = useState(false);
  const [addStore] = useMutation(CREATE_USER_STORE, {
    variables: {
      userId: 5,
      storeId: parseInt(id)
    }
  })

  const handleChecked = () => {
    setChecked(!checked);
    addStore()
  };

  return (
    <div>
      <section className="individual-store-card" key={id}>
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        <p>{name}</p>
        <p>{address}</p>
      </section>
        {/* <button onClick={() => addStore()}>Start Shopping</button> */}
    </div>
  );
};

export default StoreCard;
