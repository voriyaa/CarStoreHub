import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Header = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === 'Enter') {
      onSearch(query);
      navigate('/');
    }
  };

  return (
    <header className="header">
      <Link to="/" className="logo">
        <h1>Car Shop</h1>
      </Link>
      <input
        type="text"
        placeholder="Search"
        className="search-bar"
        value={query}
        onChange={handleSearchChange}
        onKeyDown={handleSearchSubmit}
      />
      <div className="header-icons">
        <Link to="/login"><i className="fas fa-user"></i></Link>
        <Link to="/cart"><i className="fas fa-shopping-cart"></i></Link>
        <Link to="/purchases"><i className="fas fa-car"></i></Link>
        <Link to="/compare"><i className="fas fa-balance-scale"></i></Link>
      </div>
    </header>
  );
};

export default Header;
