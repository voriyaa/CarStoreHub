import React, { useState } from 'react';

const Filters = ({ onApplyFilters }) => {
  const brands = ['Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Lexus', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Subaru', 'Toyota', 'Volkswagen'];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [priceRange, setPriceRange] = useState([10000, 100000]);

  const toggleBrand = (brand) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand) ? prevSelected.filter((b) => b !== brand) : [...prevSelected, brand]
    );
  };

  const handleApplyFilters = () => {
    onApplyFilters({
      brands: selectedBrands,
      model,
      year,
      minPrice: priceRange[0],
      maxPrice: priceRange[1],
    });
  };

  return (
    <div className="filters">
      <h3>Filters</h3>
      <div className="brands">
        {brands.map((brand) => (
          <button
            key={brand}
            onClick={() => toggleBrand(brand)}
            className={`brand-button ${selectedBrands.includes(brand) ? 'selected' : ''}`}
          >
            {brand}
          </button>
        ))}
      </div>

      <div className="filter-inputs">
        <input
          type="text"
          placeholder="Model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <input
          type="text"
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />

        <div className="price-range">
          <label>Price</label>
          <input
            type="range"
            min="10000"
            max="100000"
            value={priceRange[0]}
            onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
          />
          <input
            type="range"
            min="10000"
            max="100000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
          />
          <p>
            Price: ${priceRange[0]} - ${priceRange[1]}
          </p>
        </div>

        <button className="apply-filters" onClick={handleApplyFilters}>
          Apply filters
        </button>
      </div>
    </div>
  );
};

export default Filters;
