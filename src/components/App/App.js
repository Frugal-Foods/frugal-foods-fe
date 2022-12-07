import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { getStores } from '../../hooks/useStores';
import { getStoreItems } from '../../hooks/useStoreItems'
import Header from '../Header/Header';
import { Footer } from '../Footer/Footer';
import SearchPage from '../SearchPage/SearchPage';
import StoresPage from '../StoresPage/StoresPage';
import { CartItem } from '../CartItem/CartItem';

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
        <Route path='/' element={<StoresPage queryStores={queryStores} stores={stores}/>}/>
        <Route path='/search' element={<SearchPage queryStoreItems={queryStoreItems} storeItems={storeItems}/>}/>
        <Route path='/cart' element={<CartItem />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
