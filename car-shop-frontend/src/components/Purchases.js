import React, { useState, useEffect } from 'react';
import './Purchases.css';
import api from '../api';

const Purchases = () => {
  const [purchasedCars, setPurchasedCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPurchases = async () => {
      try {
        const response = await api.get('/purchases/', {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        });
        setPurchasedCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching purchases:', error);
        setError('Failed to load purchases. Please try again later.');
        setLoading(false);
      }
    };

    fetchPurchases();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  if (loading) {
    return <div className="purchases-container">Loading your purchases...</div>;
  }

  if (error) {
    return <div className="purchases-container">{error}</div>;
  }

  return (
    <div className="purchases-container">
      <h2>Your Cars</h2>
      {purchasedCars.length === 0 ? (
        <p>You have not purchased any cars yet.</p>
      ) : (
        <div className="purchases-list">
          {purchasedCars.map((purchase) => (
            <div key={purchase.id} className="purchase-item">
              <img
                src={purchase.car.images[0]}
                alt={purchase.car.name}
                className="purchase-image"
              />
              <div className="purchase-details">
                <h3>{purchase.car.name}</h3>
                <p>Purchased on: {formatDate(purchase.purchase_date)}</p>
                <p>Quantity: {purchase.quantity}</p>
                <p>Price: ${purchase.car.price.toLocaleString()}</p>
                <p>Year: {purchase.car.year}</p>
                <p>Color: {purchase.car.specs?.color || 'N/A'}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Purchases;
