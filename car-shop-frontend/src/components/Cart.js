// src/components/Cart.js
import React, { useState } from 'react';
import './Cart.css';

const Cart = () => {
  // Мок данные для корзины, приведенные к единому формату
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "2019 Toyota Camry SE",
      specs: {
        price: 24990,
        year: 2020,
        mileage: "33,000 miles"
      },
      quantity: 1,
      images: [
        "https://img.freepik.com/free-photo/curly-stylish-girl-wear-blue-jeans-skirt-blouse-glasses-posed-near-blue-car-street-city_627829-10180.jpg?semt=ais_hybrid"
      ]
    },
    {
      id: 2,
      name: "2019 Toyota Camry SE",
      specs: {
        price: 24990,
        year: 2020,
        mileage: "33,000 miles"
      },
      quantity: 2,
      images: [
        "https://img.freepik.com/free-photo/close-up-car-dealership_23-2148130076.jpg?t=st=1731237873~exp=1731241473~hmac=70884591dd0f770524a303bc4ba80798e9d21908e7faabc2556c349947c0e6d5&w=996"
      ]
    },
    {
      id: 3,
      name: "2019 Toyota Camry SE",
      specs: {
        price: 24990,
        year: 2020,
        mileage: "33,000 miles"
      },
      quantity: 1,
      images: [
        "https://img.freepik.com/free-photo/curved-blue-sports-car-hood-showing-abstract-reflection_8353-8393.jpg?t=st=1731237767~exp=1731241367~hmac=7efc39b92b585a787b36290064ffe908478c5dde1547e47d5dddd11fcc3b2c53&w=996"
      ]
    }
  ]);

  const [selectedItems, setSelectedItems] = useState([]);

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
        <button className="continue-shopping">Continue Shopping</button>
        <button className="proceed-checkout">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
