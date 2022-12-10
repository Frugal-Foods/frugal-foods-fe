import React from "react";
import StoresContainer from "../StoresContainer/StoresContainer";
import ZipcodeSearch from "../ZipcodeSearch/ZipcodeSearch";
import "./StoresPage.css";
import { useLazyQuery } from "@apollo/client";
import { GET_STORES } from "../../hooks/getQueries";

const StoresPage = () => {
  const [getStores, {loading, error, data}] = useLazyQuery(GET_STORES)
  console.log(data)

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
