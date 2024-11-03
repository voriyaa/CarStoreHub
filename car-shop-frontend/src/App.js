import React from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import CarCard from './components/CarCard';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Filters />
        <div className="car-section">
          <h2>Find the right car for you</h2>
          <p>3 car found</p>
          <CarCard />
        </div>
      </div>
    </div>
  );
}

export default App;
