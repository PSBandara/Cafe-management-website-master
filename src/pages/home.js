import React from 'react';
import Navbar from '../components/navbar';
import '../assest/css/home.css';

function Home() {
  return (
    <div className="home">
      <Navbar /> 
      <main className="hero-section">
        <h1 className="tagline">Where Flavor Meets Ambiance</h1>
        <p className="description">
          Indulge in a culinary journey like no other. At Grill House, we bring you a blend of delectable flavors, 
          exceptional service, and a cozy atmosphere that will make every visit unforgettable. Whether you're here for a romantic dinner, a family celebration, or a casual meal with friends, we have something special for everyone.
        </p>
      </main>
    </div>
  );
}

export default Home;
