import React, { useEffect, useState } from 'react';

const Filters = ({ onApplyFilters, resetFiltersTrigger }) => {
  const brands = ['Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Lexus', 'Mazda', 'Mercedes-Benz', 'Nissan', 'Subaru', 'Toyota', 'Volkswagen'];

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [priceRange, setPriceRange] = useState([10000, 100000]);

  // Сброс фильтров при обновлении `resetFiltersTrigger`
  useEffect(() => {
    setSelectedBrands([]);
    setModel('');
    setYear('');
    setPriceRange([10000, 100000]);
  }, [resetFiltersTrigger]);

  const toggleBrand = (brand) => {
    setSelectedBrands((prevSelected) =>
      prevSelected.includes(brand) ? prevSelected.filter(b => b !== brand) : [...prevSelected, brand]
    );
  };

  const handleModelChange = (e) => setModel(e.target.value);
  const handleYearChange = (e) => setYear(e.target.value);

  const handlePriceChange = (e, index) => {
    const newPriceRange = [...priceRange];
    newPriceRange[index] = Number(e.target.value);
    setPriceRange(newPriceRange);
  };

  const handleApplyFilters = () => {
    console.log("Нажата кнопка Apply filters"); // Проверка в консоли
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
        <input type="text" placeholder="Model" value={model} onChange={handleModelChange} />
        <input type="text" placeholder="Year" value={year} onChange={handleYearChange} />

        <div className="price-range">
          <label>Price</label>
          <input type="range" min="10000" max="100000" value={priceRange[0]} onChange={(e) => handlePriceChange(e, 0)} />
          <input type="range" min="10000" max="100000" value={priceRange[1]} onChange={(e) => handlePriceChange(e, 1)} />
          <p>Price: ${priceRange[0]} - ${priceRange[1]}</p>
        </div>

        <button className="apply-filters" onClick={handleApplyFilters}>Apply filters</button>
      </div>
    </div>
  );
};

export default Filters;
