// src/components/Compare.js
import React, { useState } from 'react';
import './Compare.css';

const Compare = () => {
  // Мок данные для сравнения машин, приведенные к единому формату
  const [compareCars, setCompareCars] = useState([
    {
      id: 1,
      name: 'Acura MDX',
      specs: {
        year: 2022,
        engine: '3.7L V6',
        transmission: '9-spd auto',
        price: 47200,
        horsepower: '290hp',
        fuelType: 'Gasoline',
        fuelEconomy: '19 MPG city / 26 MPG highway',
        maxSpeed: '130 mph',
        seatingCapacity: '7',
        cargoSpace: '90.9 cu.ft',
        safetyRating: '5-Star',
        warranty: '5 years / 60,000 miles',
        carplay: 'Standard',
        driverAssistance: 'Standard',
        infotainmentSystem: 'Touchscreen',
      },
      images: [
        'https://img.freepik.com/free-photo/high-angle-guard-woman-watching-area_23-2148404121.jpg'
      ],
    },
    {
      id: 2,
      name: 'Audi Q5',
      specs: {
        year: 2022,
        engine: '2.5L I4',
        transmission: '8-spd auto',
        price: 43300,
        horsepower: '261hp',
        fuelType: 'Gasoline',
        fuelEconomy: '23 MPG city / 28 MPG highway',
        maxSpeed: '130 mph',
        seatingCapacity: '5',
        cargoSpace: '53.1 cu.ft',
        safetyRating: '5-Star',
        warranty: '4 years / 50,000 miles',
        carplay: 'Standard',
        driverAssistance: 'Standard',
        infotainmentSystem: 'Touchscreen',
      },
      images: [
        'https://img.freepik.com/free-photo/young-happy-woman-drinking-coffee-by-car_1303-22434.jpg'
      ],
    },
    {
      id: 3,
      name: 'BMW X3',
      specs: {
        year: 2022,
        engine: '2.0L I4',
        transmission: '8-spd auto',
        price: 43700,
        horsepower: '248hp',
        fuelType: 'Gasoline',
        fuelEconomy: '24 MPG city / 29 MPG highway',
        maxSpeed: '130 mph',
        seatingCapacity: '5',
        cargoSpace: '62.7 cu.ft',
        safetyRating: '5-Star',
        warranty: '4 years / 50,000 miles',
        carplay: 'Standard',
        driverAssistance: 'Standard',
        infotainmentSystem: 'Touchscreen',
      },
      images: [
        'https://img.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg'
      ],
    },
    {
      id: 4,
      name: 'Cadillac XT5',
      specs: {
        year: 2022,
        engine: '2.0L I4',
        transmission: '9-spd auto',
        price: 45000,
        horsepower: '235hp',
        fuelType: 'Gasoline',
        fuelEconomy: '21 MPG city / 27 MPG highway',
        maxSpeed: '130 mph',
        seatingCapacity: '5',
        cargoSpace: '63.0 cu.ft',
        safetyRating: '5-Star',
        warranty: '4 years / 50,000 miles',
        carplay: 'Standard',
        driverAssistance: 'Standard',
        infotainmentSystem: 'Touchscreen',
      },
      images: [
        'https://img.freepik.com/premium-photo/portrait-handsome-young-businessman-black-suit-tie-outdoors-near-modern-car-city_146671-28286.jpg'
      ],
    },
  ]);

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
