Here's a React component for a `StatsSection` in TypeScript, designed for your luxury dark Airbnb website named HouseIL. This component will display some key statistics in an elegant and high-end design using pink and black colors.

// components/StatsSection.tsx

import React from 'react';
import './StatsSection.css'; // Assuming you have a CSS file for styling

const StatsSection: React.FC = () => {
  const stats = [
    { value: '500+', label: 'Luxury Homes' },
    { value: '300+', label: 'Happy Guests' },
    { value: '100+', label: '5-Star Reviews' },
    { value: '24/7', label: 'Customer Support' },
  ];

  return (
    <section className="stats-section">
      <h2 className="stats-title">Our Achievements</h2>
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;

And here is a simple CSS file to style the component (`StatsSection.css`):

/* components/StatsSection.css */

.stats-section {
  background-color: #000; /* Black background */
  color: #ff69b4; /* Pink text */
  padding: 40px;
  text-align: center;
}

.stats-title {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.stats-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.stat-item {
  flex: 1;
  min-width: 150px;
  margin: 10px;
  padding: 20px;
  border: 2px solid #ff69b4; /* Pink border */
  border-radius: 10px;
  transition: transform 0.3s;
}

.stat-item:hover {
  transform: scale(1.05);
}

.stat-value {
  font-size: 2rem;
  font-weight: bold;
}

.stat-label {
  display: block;
  font-size: 1rem;
  margin-top: 5px;
}

This code creates a `StatsSection` component that displays key statistics in a visually appealing way, consistent with the luxury theme of your website. You can adjust the styles further to match your specific design preferences.