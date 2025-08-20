Here's a simple loading component for your luxury dark Airbnb website named HouseIL, designed with an elegant and high-end aesthetic in pink and black colors. This component can be used to indicate loading states in your application.

// app/loading.tsx

import React from 'react';
import './Loading.css'; // Assuming you will create a CSS file for styles

const Loading: React.FC = () => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <h2 className="loading-text">Loading...</h2>
    </div>
  );
};

export default Loading;

You can create a corresponding CSS file (`Loading.css`) to style the loading component. Here’s an example of how you might style it:

/* Loading.css */

.loading-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000; /* Black background */
  color: #ff69b4; /* Pink color for text */
}

.loading-spinner {
  border: 8px solid #f3f3f3; /* Light grey */
  border-top: 8px solid #ff69b4; /* Pink */
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

.loading-text {
  margin-top: 20px;
  font-size: 24px;
  font-family: 'Arial', sans-serif; /* You can change this to a more elegant font */
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

This code creates a loading spinner and a loading text, styled to fit the luxurious theme of your website. You can further customize the styles to match your design preferences.