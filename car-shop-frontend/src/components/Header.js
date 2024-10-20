import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>Car Shop</h1>
      <input type="text" placeholder="Search" className="search-bar" />
      <div className="header-icons">
        <i className="fas fa-user"></i>
        <i className="fas fa-shopping-cart"></i>
      </div>
    </header>
  );
};

export default Header;
