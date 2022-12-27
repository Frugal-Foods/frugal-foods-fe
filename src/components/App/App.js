import React from "react";
import { useEffect, useState } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { UserContext } from "../../context/userContext";
import Header from "../Header/Header";
import { Footer } from "../Footer/Footer";
import SearchPage from "../SearchPage/SearchPage";
import StoresPage from "../StoresPage/StoresPage";
import CartPage from "../CartPage/CartPage";
import { GET_USER } from "../../hooks/getQueries";
import { useLazyQuery } from "@apollo/client";

const App = () => {
  const [user, setUser] = useState(0);
  const [getUser] = useLazyQuery(GET_USER, {
    onCompleted: (data) => setUser(data?.user[0].id),
  });

  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser();
      setUser(parseInt(response.data.user[0].id));
    };
    fetchUser();
  }, []);

  return (
   <UserContext.Provider value={user}>
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
    </UserContext.Provider> 
    
  );
};

export default App;
