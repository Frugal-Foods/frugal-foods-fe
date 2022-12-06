import React, { useState } from 'react';
import './App.css';
import { getStores } from '../../hooks/useStores';
import ZipcodeSearch from '../ZipcodeSearch/ZipcodeSearch';
import { SearchItem } from '../SearchItem/SearchItem';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { CartItem } from '../CartItem/CartItem';
import StoresContainer from '../StoresContainer/StoresContainer';
import { SearchForm } from '../SearchForm/SearchForm';
import { SearchContainer } from '../SearchContainer/SearchContainer';

const App = () => {
  const [stores, setStores] = useState([])

  const queryStores = (searchValue) => {
    const { data } = getStores(searchValue)
    setStores(data.stores)
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={
          <>
            <ZipcodeSearch queryStores={queryStores} />
            <StoresContainer stores={stores} />
          </>
        } />
        <Route path='/search' element={
          <>
            <SearchContainer />
            <SearchForm />
          </>
        } />
        <Route path='/cart' element={<CartItem />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
