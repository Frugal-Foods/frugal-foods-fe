import React, { useState } from "react";
import "./StoreCard.css";
import { CREATE_USER_STORE } from "../../hooks/postMutations";
import { DELETE_STORE_MUTATION } from "../../hooks/postMutations";
import { useMutation } from "@apollo/client";
import { useUserStores } from "../../hooks/getQueries";

const StoreCard = ({ id, name, address }) => {
  console.log(id, name, address)
  const [checked, setChecked] = useState(false);
  const {data, loading, error, refetch} = useUserStores(5)

  const findUserStoreId = data?.userStores.find(store => {
    if(store?.storeId === id) {
      return store?.id
    }
  })

  const [addStore] = useMutation(CREATE_USER_STORE, {
    variables: {
      userId: 5,
      storeId: id
    },
    onCompleted: () => {
      refetch()
    }
  })
  const [deleteStore] = useMutation(DELETE_STORE_MUTATION, {
    variables: {
      id: findUserStoreId?.id
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
