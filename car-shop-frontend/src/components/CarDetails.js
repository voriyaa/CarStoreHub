// src/components/CarDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './CarDetails.css';

const CarDetails = ({ cars }) => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id, 10));

  if (!car) {
    return <div>Car not found</div>;
  }

  return (
    <div className="car-details-container">
      <div className="car-details">
        <h2>{car.name}</h2>
        <div className="car-images">
          {car.images.map((image, index) => (
            <img key={index} src={image} alt={`${car.name} ${index + 1}`} />
          ))}
        </div>
        <div className="car-info">
          <p><strong>Price:</strong> ${car.specs.price.toLocaleString()}</p>
          <p><strong>Year:</strong> {car.year}</p>
          <p><strong>Horsepower:</strong> {car.specs.horsepower}</p>
          <p><strong>Fuel Type:</strong> {car.specs.fuelType}</p>
          <p><strong>Fuel Economy:</strong> {car.specs.fuelEconomy}</p>
          <p><strong>Seating Capacity:</strong> {car.specs.seatingCapacity}</p>
          <p><strong>Cargo Space:</strong> {car.specs.cargoSpace}</p>
          <p><strong>Safety Rating:</strong> {car.specs.safetyRating}</p>
          <p>{car.description}</p>
        </div>
      </div>
      <div className="chat-section">
        <h3>Chat with the seller</h3>
        <div className="chat-box">
          <p className="seller">Seller: Hello! How can I help you?</p>
          {/* Добавьте возможность для сообщений пользователя */}
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Type your message..." />
          <button>Send</button>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
