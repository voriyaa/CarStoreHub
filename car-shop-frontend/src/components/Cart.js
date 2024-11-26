import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { cartItems as mockCartItems } from './data/cartMockData';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState(mockCartItems);
  const [selectedItems, setSelectedItems] = useState([]);
  const navigate = useNavigate();

  const toggleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const incrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    setSelectedItems((prevSelected) => prevSelected.filter((itemId) => itemId !== id));
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <input
              type="checkbox"
              checked={selectedItems.includes(item.id)}
              onChange={() => toggleSelectItem(item.id)}
              className="cart-item-checkbox"
            />
            <img src={item.images[0]} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.specs.price.toLocaleString()}</p>
              <p>{item.specs.year}, {item.specs.mileage}</p>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => decrementQuantity(item.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item.id)}>+</button>
            </div>
            <button onClick={() => removeItem(item.id)} className="remove-item-icon">
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="cart-buttons">
        <button className="continue-shopping" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="proceed-checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
