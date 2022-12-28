import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContext } from "../../context/userContext";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import SearchPage from "../SearchPage/SearchPage";
import StoresPage from "../StoresPage/StoresPage";
import CartPage from "../CartPage/CartPage";
import { GET_USER } from "../../hooks/getQueries";
import { useQuery } from "@apollo/client";

const App = () => {
  const [user, setUser] = useState(0);
  const { error, loading } = useQuery(GET_USER, {
    onCompleted: (data) => setUser(parseInt(data?.user[0].id)),
  });

  if (loading) {
    return <h2>Frugal Foods is loading...</h2>;
  }
  if (error) {
    return <h2>Error: {error.message}</h2>;
  }
  return (
    <UserContext.Provider value={user}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<StoresPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/cart" element={<CartPage />}></Route>
        </Routes>
        <Footer />
      </div>
    </UserContext.Provider>
  );
};

export default App;
