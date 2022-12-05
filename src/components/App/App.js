import './App.css';
import React from 'react'
import ZipcodeSearch from '../ZipcodeSearch/ZipcodeSearch';
import Header from '../Header/Header';

const App = () => {

  return (
    <div className="App">
      <Header />
      <ZipcodeSearch />
    </div>
  );
}

export default App;
