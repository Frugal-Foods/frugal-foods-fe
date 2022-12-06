import React, { useState } from 'react';
import './App.css';
import { getStores } from '../../hooks/useStores';
import ZipcodeSearch from '../ZipcodeSearch/ZipcodeSearch';
import Header from '../Header/Header';
import StoresContainer from '../StoresContainer/StoresContainer';

const App = () => {
  const [stores, setStores] = useState([])

  const queryStores = (searchValue) => {
    const {data} = getStores(searchValue)
    setStores(data.stores)
}

  return (
    <div className="App">
      <Header />
      <ZipcodeSearch />
    </div>
  );
}

export default App;
