Here's a sample `PricingSection.tsx` component for your luxury dark Airbnb website named HouseIL. This component is designed with an elegant and high-end design in pink and black colors.

// components/PricingSection.tsx

import React from 'react';
import './PricingSection.css'; // Importing CSS for styling

const PricingSection: React.FC = () => {
  return (
    <section className="pricing-section">
      <div className="container">
        <h2 className="section-title">Our Pricing</h2>
        <div className="pricing-cards">
          <div className="pricing-card">
            <h3 className="card-title">Standard Room</h3>
            <p className="card-price">$150/night</p>
            <ul className="card-features">
              <li>1 King Bed</li>
              <li>Free Wi-Fi</li>
              <li>Breakfast Included</li>
            </ul>
            <button className="btn-book">Book Now</button>
          </div>
          <div className="pricing-card">
            <h3 className="card-title">Deluxe Suite</h3>
            <p className="card-price">$250/night</p>
            <ul className="card-features">
              <li>2 Queen Beds</li>
              <li>Free Wi-Fi</li>
              <li>Breakfast & Dinner Included</li>
              <li>Private Balcony</li>
            </ul>
            <button className="btn-book">Book Now</button>
          </div>
          <div className="pricing-card">
            <h3 className="card-title">Luxury Villa</h3>
            <p className="card-price">$500/night</p>
            <ul className="card-features">
              <li>3 Bedrooms</li>
              <li>Private Pool</li>
              <li>Free Wi-Fi</li>
              <li>Chef Service Available</li>
            </ul>
            <button className="btn-book">Book Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

### CSS (PricingSection.css)

You can create a CSS file named `PricingSection.css` to style the component as per your luxury theme:

/* components/PricingSection.css */

.pricing-section {
  background-color: #000;
  color: #fff;
  padding: 50px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  color: #ff69b4; /* Pink color */
  margin-bottom: 40px;
}

.pricing-cards {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.pricing-card {
  background-color: #222;
  border: 1px solid #ff69b4; /* Pink border */
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  text-align: center;
  transition: transform 0.3s;
}

.pricing-card:hover {
  transform: scale(1.05);
}

.card-title {
  font-size: 1.8rem;
  color: #ff69b4; /* Pink color */
}

.card-price {
  font-size: 1.5rem;
  margin: 10px 0;
}

.card-features {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.card-features li {
  margin: 5px 0;
}

.btn-book {
  background-color: #ff69b4; /* Pink button */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn-book:hover {
  background-color: #ff1493; /* Darker pink on hover */
}

This code provides a clean and elegant pricing section for your luxury Airbnb website, with a focus on high-end design elements. Adjust the styles as needed to fit your overall design vision!