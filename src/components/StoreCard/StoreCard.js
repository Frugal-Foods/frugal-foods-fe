import React, { useState, useContext } from "react";
import "./StoreCard.css";
import {
  CREATE_USER_STORE,
  DELETE_USER_STORE,
} from "../../hooks/postMutations";
import { useMutation } from "@apollo/client";
import { UserContext } from "../../context/userContext";

const StoreCard = ({ storeId, name, address, userStoreId, onChange }) => {
  const user = useContext(UserContext);
  const [checked, setChecked] = useState(userStoreId?true:false);
  const [addStore, { data }] = useMutation(CREATE_USER_STORE, {
    variables: {
      userId: user,
      storeId: parseInt(storeId),
    },
    onCompleted: () => {
      setChecked(true);
      onChange()
    },
  });

  const [deleteStore] = useMutation(DELETE_USER_STORE, {
    variables: {
      id: userStoreId || data?.id,
    },
    onCompleted: () => {
      setChecked(false);
      onChange()
    },
  });

  const handleChecked = () => {
    if (!checked) {
      addStore();
    } else {
      deleteStore();
    }
  };

  return (
    <div>
      <section className="individual-store-card" key={storeId}>
        <input type="checkbox" checked={checked} onChange={handleChecked} />
        <p>{name}</p>
        <p>{address}</p>
      </section>
    </div>
  );
};

export default StoreCard;
