import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import './Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await api.get('/cart/');
        setCartItems(response.data);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const toggleSelectItem = (id) => {
    setSelectedItems((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((itemId) => itemId !== id)
        : [...prevSelected, id]
    );
  };

  const incrementQuantity = async (id) => {
    try {
      await api.patch('/cart/increase/', { car_id: id });
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.car.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } catch (error) {
      console.error('Error increasing quantity:', error);
    }
  };

  const decrementQuantity = async (id) => {
    try {
      await api.patch('/cart/decrease/', { car_id: id });
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.car.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    } catch (error) {
      console.error('Error decreasing quantity:', error);
    }
  };

  const removeItem = async (id) => {
    try {
      await api.delete('/cart/remove/', { data: { car_id: id } });
      setCartItems((prevItems) => prevItems.filter((item) => item.car.id !== id));
      setSelectedItems((prevSelected) => prevSelected.filter((itemId) => itemId !== id));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleCheckout = async () => {
    const selectedCartItems = cartItems.filter((item) => selectedItems.includes(item.car.id));

    if (selectedCartItems.length === 0) {
      alert('Please select items to proceed to checkout.');
      return;
    }

    try {
      const response = await api.post(
        '/purchases/',
        selectedCartItems.map((item) => ({
          car_id: item.car.id,
          quantity: item.quantity,
        })),
        {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
        }
      );

      setSuccessMessage('Congratulations on your purchase! 🎉');
      setCartItems((prevItems) =>
        prevItems.filter((item) => !selectedItems.includes(item.car.id))
      );
      setSelectedItems([]);
    } catch (error) {
      console.error('Error during checkout:', error);
      alert('An error occurred while processing your purchase.');
    }
  };

  const totalAmount = cartItems
    .filter((item) => selectedItems.includes(item.car.id))
    .reduce((acc, item) => acc + item.car.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <h2>Your Cart</h2>
        <p>Your cart is empty.</p>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {successMessage && <p className="success-message">{successMessage}</p>}
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.car.id} className="cart-item">
            <label className="cart-item-checkbox-container">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.car.id)}
                onChange={() => toggleSelectItem(item.car.id)}
                className="cart-item-checkbox"
              />
              <span className="checkmark"></span>
            </label>
            <img src={item.car.images[0]} alt={item.car.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.car.name}</h3>
              <p>${item.car.price.toLocaleString()}</p>
              <p>{item.car.year}</p>
            </div>
            <div className="cart-item-quantity">
              <button onClick={() => decrementQuantity(item.car.id)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => incrementQuantity(item.car.id)}>+</button>
            </div>
            <button onClick={() => removeItem(item.car.id)} className="remove-item-icon">
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${totalAmount.toLocaleString()}</h3>
      </div>
      <div className="cart-buttons">
        <button className="continue-shopping" onClick={handleContinueShopping}>
          Continue Shopping
        </button>
        <button className="proceed-checkout" onClick={handleCheckout}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
