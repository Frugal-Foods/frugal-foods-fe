import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
// import { GET_STORES } from "../../hooks/useStores";
// import { getStoreItems } from "../../hooks/useStoreItems";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import SearchPage from "../SearchPage/SearchPage";
import StoresPage from "../StoresPage/StoresPage";
import CartPage from "../CartPage/CartPage";

const App = () => {
  // const queryStores = (searchValue) => {
  //   const { data } = getStores(searchValue);
  //   setStores(data.stores);
  // };

  // const queryStoreItems = (searchValue) => {
  //   const { data } = getStoreItems(searchValue);
  //   setStoreItems(data.items);
  //   //This will need to be moved to different query when mock data is added- Placeholder for now.
  //   setCartItems(data.items);
  // };

  //Comment in when mock data is created
  // const queryCartItems = (userID) => {
  //   const { data } = getCartItems(userID);
  //   setCartItems(data.items);
  // };

 

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<StoresPage />}
        />
        <Route
          path="/search"
          element={
            <SearchPage
            />
          }
        />
        <Route
          path="/cart"
          element={<CartPage />}
        ></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
