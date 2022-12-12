import React, {useContext} from "react";
import StoreCard from "../StoreCard/StoreCard";
import './StoresContainer.css'
import { Link } from 'react-router-dom'
import { UserContext } from "../../context/userContext";
import { useQuery } from "@apollo/client";
import { GET_USER_STORES } from "../../hooks/getQueries";

const StoresContainer = ({ stores }) => {
  const user = useContext(UserContext)
  const {data, loading, refetch} = useQuery(GET_USER_STORES, {
    variables: {
      userId: user
    }
  })

  const handleUserStoresChange = () => {
    refetch()
  }

  if(!stores || loading) {
    return null
  }
  const storeCards = stores.map((store) => {
    const foundUserStore = data?.userStores.find((userStore) => userStore.storeId === store.id)
    return (
      <StoreCard 
        name={store.name} 
        address={store.address} 
        storeId={store.id} 
        key={store.id} 
        userStoreId={foundUserStore?.id}
        onChange={handleUserStoresChange}
        />
    );
  });

  return (
    <section className="stores-container">
      <div className="store-cards">{storeCards}</div>
      <Link to={'/search'}>
      <button>Start Shopping!</button>
      </Link>
    </section>
  );
};

export default StoresContainer;
