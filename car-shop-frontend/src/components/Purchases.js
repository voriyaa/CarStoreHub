// src/components/Purchases.js
import React from 'react';
import './Purchases.css';

const Purchases = () => {
  const purchasedCars = [
    {
      id: 1,
      name: '2021 Tesla Model 3',
      purchaseDate: 'March 20, 2021',
      images: [
        'https://img.freepik.com/free-photo/curly-stylish-girl-wear-blue-jeans-skirt-blouse-glasses-posed-near-blue-car-street-city_627829-10180.jpg?semt=ais_hybrid'
      ],
    },
    {
      id: 2,
      name: '2020 Audi A4',
      purchaseDate: 'July 14, 2020',
      images: [
        'https://img.freepik.com/free-photo/close-up-car-dealership_23-2148130076.jpg?t=st=1731237873~exp=1731241473~hmac=70884591dd0f770524a303bc4ba80798e9d21908e7faabc2556c349947c0e6d5&w=996'
      ],
    },
  ];

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
              <button className="view-details-button">View details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Purchases;
