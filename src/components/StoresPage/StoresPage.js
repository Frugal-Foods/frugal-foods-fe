import React, { useContext, useState } from "react";
import StoresContainer from "../StoresContainer/StoresContainer";
import ZipcodeSearch from "../ZipcodeSearch/ZipcodeSearch";
import "./StoresPage.css";
import { useLazyQuery, useMutation } from "@apollo/client";
import { GET_ALL_STORES } from "../../hooks/getQueries";
import { UserContext } from "../../context/userContext";
import { DESTROY_ALL_USER_STORES } from "../../hooks/postMutations";

const StoresPage = () => {
  const user = useContext(UserContext);
  const [stores, setStores] = useState([]);
  const [getAllStores, { loading, error }] = useLazyQuery(GET_ALL_STORES, {
    onCompleted: (data) => setStores(data?.stores),
  });
  const [destroyStores] = useMutation(DESTROY_ALL_USER_STORES, {
    variables: {
      userId: user.toString(),
    },
    onCompleted: () => window.location.reload(true),
  });

  const queryStores = (searchValue) => {
    getAllStores({ variables: { zipcode: searchValue } });
  };

  const handleResetSearch = () => {
    destroyStores();
  };

  return (
    <section className="stores-page">
      <ZipcodeSearch
        queryStores={queryStores}
        onResetSearch={handleResetSearch}
      />
      {loading && <p>Loading...</p>}
      {!loading && !error && <StoresContainer stores={stores} />}
      {error && <p>Error: {error}</p>}
    </section>
  );
};

export default StoresPage;
