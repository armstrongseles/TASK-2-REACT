import React from 'react';

const Cart = ({ cartCount }) => {
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <p>Items in Cart: {cartCount}</p>
    </div>
  );
};

export default Cart;
