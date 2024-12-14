import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api';
import './CarDetails.css';

const CarDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await api.get(`/cars/${id}/`);
        setCar(response.data);
        setLoading(false);
      } catch (err) {
        setError('Car not found');
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  const addToCart = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('You need to log in to add items to the cart.');
      return;
    }

    try {
      const response = await api.post(
        '/cart/add/',
        { car_id: id },
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage('Added to cart successfully!');
      console.log('Cart response:', response.data);
    } catch (err) {
      console.error('Error adding to cart:', err.response?.data || err.message);
      setMessage(err.response?.data?.error || 'Failed to add to cart.');
    }
  };

  const addToCompare = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setMessage('You need to log in to compare items.');
      return;
    }

    try {
      const response = await api.post(
        '/compare/add/',
        { car_id: id },
        {
          headers: {
            Authorization: `Token ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      setMessage('Added to comparison successfully!');
      console.log('Compare response:', response.data);
    } catch (err) {
      console.error('Error adding to compare:', err.response?.data || err.message);
      setMessage(err.response?.data?.detail || 'Failed to add to comparison.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="car-details-container">
      <div className="car-details">
        <h2>{car.name || 'Unknown Car'}</h2>
        <div className="car-images">
          {car.images && car.images.length > 0 ? (
            car.images.map((image, index) => (
              <img key={index} src={image} alt={`${car.name || 'Car'} ${index + 1}`} />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>
        <div className="car-info">
          <p><strong>Price:</strong> ${car.price ? car.price.toLocaleString() : 'N/A'}</p>
          <p><strong>Year:</strong> {car.year || 'N/A'}</p>
          <p><strong>Horsepower:</strong> {car.specs?.horsepower || 'N/A'}</p>
          <p><strong>Fuel Type:</strong> {car.specs?.fuelType || 'N/A'}</p>
          <p><strong>Fuel Economy:</strong> {car.specs?.fuelEconomy || 'N/A'}</p>
          <p><strong>Seating Capacity:</strong> {car.specs?.seatingCapacity || 'N/A'}</p>
          <p><strong>Cargo Space:</strong> {car.specs?.cargoSpace || 'N/A'}</p>
          <p><strong>Safety Rating:</strong> {car.specs?.safetyRating || 'N/A'}</p>
          <p>{car.description || 'No description available'}</p>
        </div>
        <div className="actions">
          <button className="action-button add-to-cart" onClick={addToCart}>
            Add to Cart
          </button>
          <button className="action-button add-to-compare" onClick={addToCompare}>
            Add to Compare
          </button>
        </div>
        {message && <p className="message">{message}</p>}
      </div>
      <div className="seller-section">
        <h3>Seller Information</h3>
        {car.seller_info ? (
          <div className="seller-info">
            <p><strong>Name:</strong> {car.seller_info.name || 'N/A'}</p>
            <p><strong>Email:</strong> {car.seller_info.email || 'N/A'}</p>
            <p><strong>Phone:</strong> {car.seller_info.phone || 'N/A'}</p>
            <p><strong>Address:</strong> {car.seller_info.address || 'N/A'}</p>
          </div>
        ) : (
          <p>No seller information available</p>
        )}
      </div>
    </div>
  );
};

export default CarDetails;
