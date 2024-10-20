import React from 'react';

const Filters = () => {
  const brands = ['Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Lexus', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Subaru', 'Toyota', 'Volkswagen'];

  return (
    <div className="filters">
      <h3>Filters</h3>
      <div className="brands">
        {brands.map(brand => (
          <button key={brand} className="brand-button">{brand}</button>
        ))}
      </div>
      <div className="filter-inputs">
        <input type="text" placeholder="Model" />
        <input type="text" placeholder="Year" />
        <div className="price-range">
          <label>Price</label>
          <input type="range" min="0" max="100000" />
        </div>
        <button className="apply-filters">Apply filters</button>
      </div>
    </div>
  );
};

export default Filters;
