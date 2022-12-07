import React from "react";
import StoresContainer from "../StoresContainer/StoresContainer";
import ZipcodeSearch from "../ZipcodeSearch/ZipcodeSearch";
import "./StoresPage/StoresPage.css";

const StoresPage = ({ queryStores, stores }) => {
  return (
    <section className="stores-page">
      <ZipcodeSearch queryStores={queryStores} />
      <StoresContainer stores={stores} />
    </section>
  );
};

export default StoresPage;
