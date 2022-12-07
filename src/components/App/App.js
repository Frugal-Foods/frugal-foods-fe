import React, { useState } from 'react';
import './App.css';
import { getStores } from '../../hooks/useStores';
import ZipcodeSearch from '../ZipcodeSearch/ZipcodeSearch';
import Header from '../Header/Header';
import StoresContainer from '../StoresContainer/StoresContainer';
import { getStoreItems } from '../../hooks/useStoreItems'
import SearchContainer from '../SearchContainer/SearchContainer';
import SearchForm from '../SearchForm/SearchForm';

const App = () => {
  const [stores, setStores] = useState([])
  const [storeItems, setStoreItems] = useState([])

  const queryStores = (searchValue) => {
    const {data} = getStores(searchValue)
    setStores(data.stores)
}

const queryStoreItems = (searchValue) => {
  const {data} = getStoreItems(searchValue)
  console.log(data.items)
  setStoreItems(data.items)
  // console.log('app store items', storeItems)
  // setStoreNames(getStoreNames)

}

  return (
    <div className="App">
      <Header />
      <ZipcodeSearch queryStores={queryStores} />
      <StoresContainer stores= {stores} />
      <SearchContainer storeItems={storeItems}/>
      <SearchForm queryStoreItems={queryStoreItems} />
    </div>
  );
}

export default App;
