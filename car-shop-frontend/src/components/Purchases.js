import React from 'react';
import './Purchases.css';
import { purchasedCars } from './data/mockData';

const Purchases = () => {
  return (
    <div className="purchases-container">
      <h2>Your cars</h2>
      <div className="purchases-list">
        {purchasedCars.map((car) => (
          <div key={car.id} className="purchase-item">
            <img src={car.images[0]} alt={car.name} className="purchase-image" />
            <div className="purchase-details">
              <h3>{car.name}</h3>
              <p>Purchased on {car.purchaseDate}</p>
              <p>Price: ${car.specs.price.toLocaleString()}</p>
              <p>Year: {car.specs.year}</p>
              <p>Mileage: {car.specs.mileage}</p>
              <p>Color: {car.specs.color}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchases;
