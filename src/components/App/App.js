import React, { useState } from 'react';
import './App.css';
import { getStores } from '../../hooks/useStores';
import ZipcodeSearch from '../ZipcodeSearch/ZipcodeSearch';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { CartItem } from '../CartItem/CartItem';
import StoresContainer from '../StoresContainer/StoresContainer';
import { getStoreItems } from '../../hooks/useStoreItems'
import SearchContainer from '../SearchContainer/SearchContainer';
import SearchForm from '../SearchForm/SearchForm';

const App = () => {
  const [stores, setStores] = useState([])
  const [storeItems, setStoreItems] = useState([])

  const queryStores = (searchValue) => {
    const { data } = getStores(searchValue)
    setStores(data.stores)
  }

const queryStoreItems = (searchValue) => {
  const {data} = getStoreItems(searchValue)
  console.log(data.items)
  setStoreItems(data.items)
  // setStoreNames(getStoreNames)

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
            <SearchForm queryStoreItems={queryStoreItems}/>
          </>
        } />
        <Route path='/cart' element={<CartItem />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
