// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Filters from './components/Filters';
import CarCard from './components/CarCard';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Cart from './components/Cart';
import Purchases from './components/Purchases';
import Compare from './components/Compare';
import CarDetails from './components/CarDetails';
import { cars as mockCars } from './components/data/mockData';
import './styles/styles.css';

function App() {
  const [filteredCars, setFilteredCars] = useState(mockCars);
  const [searchResults, setSearchResults] = useState(mockCars);

  const handleApplyFilters = (filters) => {
    const { brands, model, year, minPrice, maxPrice } = filters;

    const filtered = searchResults.filter((car) => {
      const matchesBrand = brands.length === 0 || brands.some((brand) => car.name.toLowerCase().includes(brand.toLowerCase()));
      const matchesModel = model === '' || car.name.toLowerCase().includes(model.toLowerCase());
      const matchesYear = year === '' || car.year === parseInt(year, 10);
      const matchesPrice = car.specs.price >= minPrice && car.specs.price <= maxPrice;

      return matchesBrand && matchesModel && matchesYear && matchesPrice;
    });

    setFilteredCars(filtered);
  };

  const handleSearch = (query) => {
    const results = mockCars.filter((car) => car.name.toLowerCase().includes(query.toLowerCase()));
    setSearchResults(results);
    setFilteredCars(results); // Обновляем отфильтрованные данные после поиска
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-content">
                <Filters onApplyFilters={handleApplyFilters} />
                <div className="car-section">
                  <h2>Find the right car for you</h2>
                  <p>{filteredCars.length} cars found</p>
                  <CarCard cars={filteredCars} />
                </div>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/car/:id" element={<CarDetails cars={mockCars} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
