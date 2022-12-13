import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContext } from "../../context/userContext";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import SearchPage from "../SearchPage/SearchPage";
import StoresPage from "../StoresPage/StoresPage";
import CartPage from "../CartPage/CartPage";

const App = () => {
  return (
   <UserContext.Provider value={5}>
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
      {/* <Footer /> */}
    </div>
    </UserContext.Provider> 
  );
};

export default App;
