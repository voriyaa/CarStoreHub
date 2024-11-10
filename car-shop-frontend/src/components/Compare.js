import React, { useState } from 'react';
import './Compare.css';
import { compareCars as mockCompareCars } from './data/mockData';

const Compare = () => {
  const [compareCars] = useState(mockCompareCars);

  return (
    <div className="compare-container">
      <h2>Compare up to 4 cars</h2>
      <div className="compare-cars">
        {compareCars.map((car) => (
          <div key={car.id} className="compare-car-item">
            <img src={car.images[0]} alt={car.name} className="compare-car-image" />
            <div>
              <h3>{car.name}</h3>
              <p>{car.specs.year}, {car.specs.engine}, {car.specs.transmission}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="compare-title">
        {compareCars.map((car) => car.name).join(' vs ')}
      </h3>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Feature</th>
            {compareCars.map((car) => (
              <th key={car.id}>{car.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MSRP</td>
            {compareCars.map((car) => (
              <td key={car.id}>${car.specs.price.toLocaleString()}</td>
            ))}
          </tr>
          <tr>
            <td>Horsepower</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.specs.horsepower}</td>
            ))}
          </tr>
          <tr>
            <td>Fuel Type</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.specs.fuelType}</td>
            ))}
          </tr>
          <tr>
            <td>Fuel Economy</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.specs.fuelEconomy}</td>
            ))}
          </tr>
          <tr>
            <td>Max Speed</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.specs.maxSpeed}</td>
            ))}
          </tr>
          <tr>
            <td>Seating Capacity</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.specs.seatingCapacity}</td>
            ))}
          </tr>
          <tr>
            <td>Cargo Space</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.specs.cargoSpace}</td>
            ))}
          </tr>
          <tr>
            <td>Safety Rating</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.specs.safetyRating}</td>
            ))}
          </tr>
          <tr>
            <td>Warranty</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.specs.warranty}</td>
            ))}
          </tr>
          <tr>
            <td>Apple CarPlay</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.specs.carplay}</td>
            ))}
          </tr>
          <tr>
            <td>Driver Assistance</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.specs.driverAssistance}</td>
            ))}
          </tr>
          <tr>
            <td>Infotainment System</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.specs.infotainmentSystem}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Compare;
