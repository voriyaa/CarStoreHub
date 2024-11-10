// src/components/CarCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ cars }) => {
  return (
    <div className="car-section">
      {cars.map((car) => (
        <Link to={`/car/${car.id}`} key={car.id} className="car-card">
          <img
            src={car.images && car.images[0] ? car.images[0] : "default-image-url.jpg"}
            alt={car.name}
            className="car-image"
          />
          <div className="car-info">
            <h3>{car.name}</h3>
            <p>${car.specs && car.specs.price ? car.specs.price.toLocaleString() : "N/A"}</p>
            <p>{car.year}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CarCard;
