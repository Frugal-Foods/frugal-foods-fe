import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { getStores } from "../../hooks/useStores";
import { getStoreItems } from "../../hooks/useStoreItems";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import SearchPage from "../SearchPage/SearchPage";
import StoresPage from "../StoresPage/StoresPage";
import CartPage from "../CartPage/CartPage";

const App = () => {
  const [stores, setStores] = useState([]);
  const [storeItems, setStoreItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const queryStores = (searchValue) => {
    const { data } = getStores(searchValue);
    setStores(data.stores);
  };

  const queryStoreItems = (searchValue) => {
    const { data } = getStoreItems(searchValue);
    setStoreItems(data.items);
    //This will need to be moved to different query when mock data is added- Placeholder for now.
    setCartItems(data.items);
  };

  //Comment in when mock data is created
  // const queryCartItems = (userID) => {
  //   const { data } = getCartItems(userID);
  //   setCartItems(data.items);
  // };

  const removeItem = (id) => {
    //Mutation from graphql
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<StoresPage queryStores={queryStores} stores={stores} />}
        />
        <Route
          path="/search"
          element={
            <SearchPage
              queryStoreItems={queryStoreItems}
              storeItems={storeItems}
            />
          }
        />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} removeItem={removeItem}/>}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
