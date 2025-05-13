
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductsPage from './components/ProductsPage';
import { Provider } from 'react-redux';
import store from './redux/store';
import Menu from './components/Menu';
import CartPage from './components/CartPage';
import About from './components/About';
import NavBar from './components/NavBar'; 


function App() {


  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <NavBar /> 
          <div style={{ paddingTop: '56px' }}>
            <Routes>
              <Route path='/home' element={<Menu />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/cart' element={<CartPage />} />
              <Route path='/about' element={<About />} />
              <Route path='/error' element={<Error />} />
            </Routes>
          </div>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
