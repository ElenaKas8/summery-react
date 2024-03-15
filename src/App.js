
import React from 'react';
import Product from './components/Products/Product';
import './App.css';
import ProductsContainer from './components/ProductsContainer/ProductsContainer';
import UsersContainer from './components/UsersContainer/UsersContainer';



function App() {
  return (
    <div>
      <ProductsContainer />
      <UsersContainer />
    </div>
  );
}

export default App;
