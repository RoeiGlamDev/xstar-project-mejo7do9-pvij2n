Here's a sample `pricingpage` component for your luxury dark AirBNB website named HouseIL, designed with an elegant and high-end aesthetic in pink and black colors. This code is written in TypeScript and uses React.

// app/pricing/page.tsx

import React from 'react';
import './PricingPage.css'; // Assuming you have a CSS file for styles

const PricingPage: React.FC = () => {
  return (
    <div className="pricing-page">
      <header className="pricing-header">
        <h1>Luxury Pricing Plans</h1>
        <p>Experience the elegance of HouseIL with our exclusive pricing options.</p>
      </header>
      <div className="pricing-container">
        <div className="pricing-card">
          <h2>Standard</h2>
          <p className="price">$199/night</p>
          <ul>
            <li>1 Bedroom</li>
            <li>1 Bathroom</li>
            <li>Free Wi-Fi</li>
            <li>Complimentary Breakfast</li>
          </ul>
          <button className="btn-book">Book Now</button>
        </div>
        <div className="pricing-card">
          <h2>Deluxe</h2>
          <p className="price">$299/night</p>
          <ul>
            <li>2 Bedrooms</li>
            <li>2 Bathrooms</li>
            <li>Free Wi-Fi</li>
            <li>Complimentary Breakfast</li>
            <li>Private Balcony</li>
          </ul>
          <button className="btn-book">Book Now</button>
        </div>
        <div className="pricing-card">
          <h2>Luxury Suite</h2>
          <p className="price">$499/night</p>
          <ul>
            <li>3 Bedrooms</li>
            <li>3 Bathrooms</li>
            <li>Free Wi-Fi</li>
            <li>Complimentary Breakfast</li>
            <li>Private Pool</li>
            <li>Personal Concierge</li>
          </ul>
          <button className="btn-book">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;

### CSS (PricingPage.css)

You can create a CSS file named `PricingPage.css` to style the component according to your luxury theme:

/* PricingPage.css */

body {
  background-color: #000;
  color: #fff;
  font-family: 'Arial', sans-serif;
}

.pricing-page {
  padding: 20px;
  text-align: center;
}

.pricing-header h1 {
  color: #ff69b4; /* Pink color */
  font-size: 2.5rem;
}

.pricing-header p {
  color: #ccc;
  font-size: 1.2rem;
}

.pricing-container {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.pricing-card {
  background-color: #222;
  border: 1px solid #ff69b4; /* Pink border */
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.pricing-card h2 {
  color: #ff69b4; /* Pink color */
}

.price {
  font-size: 1.5rem;
  color: #ff69b4; /* Pink color */
}

.pricing-card ul {
  list-style: none;
  padding: 0;
  color: #ccc;
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

This code provides a basic structure for your pricing page, featuring three different pricing plans with a luxurious design. You can further customize the styles and functionality as needed.