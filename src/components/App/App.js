import './App.css';
import React from 'react'
import ZipcodeSearch from '../ZipcodeSearch/ZipcodeSearch';
import { SearchItem } from '../SearchItem/SearchItem';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { CartItem } from '../CartItem/CartItem';

const App = () => {

  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path='/' element={<ZipcodeSearch />} />
      <Route path='/search' element={<SearchItem />} />
      <Route path='/cart' element={<CartItem />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
