import React from "react";
import StoresContainer from "../StoresContainer/StoresContainer";
import ZipcodeSearch from "../ZipcodeSearch/ZipcodeSearch";
import "./StoresPage.css";
import { useLazyQuery } from "@apollo/client";
import { GET_STORES } from "../../hooks/getQueries";

const StoresPage = () => {
  const [getStores, {loading, error, data}] = useLazyQuery(GET_STORES)
  // console.log(data)
  // const [getUserStores] = useLazyQuery(GET_USER_STORES)
  // const { data, loading, error } = useUserStores(userId);

  // const queryUserStores = () => {
  //   getUserStores({variables: {userId: 5}})
  // }

  const queryStores = (searchValue) => {
    getStores({variables: {zipcode: searchValue}})
  }

  return (
    <section className="stores-page">
      <ZipcodeSearch queryStores={queryStores}/>
      {loading && <p>Loading...</p>}
      {!loading && !error && <StoresContainer stores={data?.stores} />}
      {error && <p>Error: {error}</p>}
    </section>
  );
};

export default StoresPage;
