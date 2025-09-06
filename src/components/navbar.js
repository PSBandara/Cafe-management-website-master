import React from 'react';
import '../assest/css/navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">Grill House</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">Aboutus</a></li>
          <li><a href="#dining">Dining</a></li>
          <li><a href="#review">Review</a></li>
          <li><a href="#contact">ContactUs</a></li>
        </ul>
      </nav>
      <div className="login">
        <button className="login-btn">
          <span role="img" aria-label="login">👤</span> Login
        </button>
      </div>
    </header>
  );
};

export default Navbar;
