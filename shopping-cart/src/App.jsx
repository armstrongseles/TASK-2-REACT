import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Cart from './Components/Cart';
import './styles.css';

const App = () => {
  const [cart, setCart] = useState([]);
  
  const products = [
    { id: 1, name: 'Fancy Product', price: '$40.00 - $80.00', image: 'src/assets/OIP.jpeg' },
    { id: 2, name: 'Special Item', price: '$18.00', image: 'src/assets/download (1).jpeg' },
    { id: 3, name: 'Sale Item', price: '$25.00', image: 'src/assets/download (2).jpeg' },
    { id: 4, name: 'Popular Item', price: '$40.00', image: 'src/assets/OIP (1).jpeg' },
    { id: 5, name: 'Sale Item', price: '$25.00', image: 'src/assets/OIP (2).jpeg' },
    { id: 6, name: 'Fancy Product', price: '$120.00 - $280.00', image: 'src/assets/OIP (3).jpeg' },
    { id: 7, name: 'Special Item', price: '$18.00', image: 'src/assets/OIP (4).jpeg' },
    { id: 8, name: 'Popular Item', price: '$40.00', image: 'src/assets/download (1).jpeg' }
  ];

  const addToCart = (productId) => {
    setCart([...cart, productId]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(id => id !== productId));
  };

  return (
    <div className="app">
      <Cart cartCount={cart.length} />
      <ProductList 
        products={products} 
        addToCart={addToCart} 
        removeFromCart={removeFromCart} 
        cart={cart} 
      />
    </div>
  );
};

export default App;
