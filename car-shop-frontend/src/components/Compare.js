import React, { useState, useEffect } from 'react';
import './Compare.css';
import api from '../api';

const Compare = () => {
  const [compareCars, setCompareCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompareCars = async () => {
      try {
        const response = await api.get('/compare/', {
          headers: {
            Authorization: `Token ${localStorage.getItem('token')}`,
          },
        });
        setCompareCars(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching comparison data:', error);
        setError('Failed to load comparison data. Please try again later.');
        setLoading(false);
      }
    };

    fetchCompareCars();
  }, []);

  const removeCarFromCompare = async (id) => {
    try {
      await api.delete(`/compare/remove/`, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`,
        },
        data: { car_id: id },
      });
      setCompareCars((prevCars) => prevCars.filter((car) => car.car.id !== id));
    } catch (error) {
      console.error('Error removing car from comparison:', error);
      alert('Failed to remove car from comparison.');
    }
  };

  if (loading) {
    return <div className="compare-container">Loading comparison data...</div>;
  }

  if (error) {
    return <div className="compare-container">{error}</div>;
  }

  if (compareCars.length === 0) {
    return <div className="compare-container">No cars in comparison list.</div>;
  }

  return (
    <div className="compare-container">
      <h2>Compare up to 4 cars</h2>
      <div className="compare-cars">
        {compareCars.map((car) => (
          <div key={car.id} className="compare-car-item">
            <img src={car.car.images[0]} alt={car.car.name} className="compare-car-image" />
            <div>
              <h3>{car.car.name}</h3>
              <p>{car.car.year}, {car.car.specs.engine}, {car.car.specs.transmission}</p>
              <button
                className="remove-car-button"
                onClick={() => removeCarFromCompare(car.car.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <h3 className="compare-title">
        {compareCars.map((car) => car.car.name).join(' vs ')}
      </h3>

      <table className="compare-table">
        <thead>
          <tr>
            <th>Feature</th>
            {compareCars.map((car) => (
              <th key={car.id}>{car.car.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>MSRP</td>
            {compareCars.map((car) => (
              <td key={car.id}>${car.car.price.toLocaleString()}</td>
            ))}
          </tr>
          <tr>
            <td>Horsepower</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.car.specs.horsepower}</td>
            ))}
          </tr>
          <tr>
            <td>Fuel Type</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.car.specs.fuelType}</td>
            ))}
          </tr>
          <tr>
            <td>Fuel Economy</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.car.specs.fuelEconomy}</td>
            ))}
          </tr>
          <tr>
            <td>Max Speed</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.car.specs.maxSpeed}</td>
            ))}
          </tr>
          <tr>
            <td>Seating Capacity</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.car.specs.seatingCapacity}</td>
            ))}
          </tr>
          <tr>
            <td>Cargo Space</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.car.specs.cargoSpace}</td>
            ))}
          </tr>
          <tr>
            <td>Safety Rating</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.car.specs.safetyRating}</td>
            ))}
          </tr>
          <tr>
            <td>Warranty</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.car.specs.warranty}</td>
            ))}
          </tr>
          <tr>
            <td>Apple CarPlay</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.car.specs.carplay}</td>
            ))}
          </tr>
          <tr>
            <td>Driver Assistance</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.car.specs.driverAssistance}</td>
            ))}
          </tr>
          <tr>
            <td>Infotainment System</td>
            {compareCars.map((car) => (
              <td key={car.id}>{car.car.specs.infotainmentSystem}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Compare;
