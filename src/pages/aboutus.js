import React from 'react';
import '../assest/css/aboutus.css';
import bufferimg from '../assest/images/buffet.jpg';
import appetizerimg from '../assest/images/Appetizers.jpg';
import drinksimg from '../assest/images/Drinks.jpg';

const AboutUs = () => {
    
    const images = {
        buffet: bufferimg,
        appetizers: appetizerimg,
        drinks: drinksimg,
      };

  return (
    <div className="aboutus-container">
      <div className="aboutus-text">
        <h1>About Us</h1>
        <p>
          Indulge in a culinary journey like no other. At Grill House, we bring you a blend of delectable flavors,
          exceptional service, and a cozy atmosphere that will make every visit unforgettable. Whether you're here
          for a romantic dinner, a family celebration, or a casual meal with friends, we have something special for
          everyone.
        </p>
      </div>
      <div className="aboutus-images">
        <div className='aboutus-image'>
            <img src={images.buffet} alt="Buffet" className="aboutus-image_1" />
            <img src={images.appetizers} alt="Appetizers" className="aboutus-image_2" />
            <img src={images.drinks} alt="Drinks" className="aboutus-image_3" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
