import React from 'react';

const Product = ({ product, addToCart, removeFromCart, isInCart }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      {isInCart ? (
        <button onClick={() => removeFromCart(product.id)}>Remove from Cart</button>
      ) : (
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
      )}
    </div>
  );
};

export default Product;
