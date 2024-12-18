import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Filters from './components/Filters';
import CarCard from './components/CarCard';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Profile from './components/Profile/Profile';
import Cart from './components/Cart';
import Purchases from './components/Purchases';
import Compare from './components/Compare';
import CarDetails from './components/CarDetails';
import api from './api';
import './styles/styles.css';

function App() {
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    brands: [],
    model: '',
    year: '',
    minPrice: 10000,
    maxPrice: 100000,
  });

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await api.get('/cars/', {
          params: {
            search: searchQuery,
            model: filters.model,
            year: filters.year,
            price_min: filters.minPrice,
            price_max: filters.maxPrice,
            brands: filters.brands.join(','),
          },
        });
        setFilteredCars(response.data);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, [searchQuery, filters]);

  const handleApplyFilters = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const resetFilters = () => {
    setFilters({
      brands: [],
      model: '',
      year: '',
      minPrice: 10000,
      maxPrice: 100000,
    });
    setSearchQuery('');
  };

  return (
    <Router>
      <div className="App">
        <Header onSearch={handleSearch} resetFilters={resetFilters} />
        <Routes>
          <Route
            path="/"
            element={
              <div className="main-content">
                <Filters onApplyFilters={handleApplyFilters} resetFiltersTrigger={resetFilters} />
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/purchases" element={<Purchases />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/car/:id" element={<CarDetails cars={filteredCars} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
