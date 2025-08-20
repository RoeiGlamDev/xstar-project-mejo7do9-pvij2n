Here's a simple implementation of a `ContactPage` component in TypeScript for your luxury dark AirBNB website named HouseIL. This component is styled with pink and black colors to match your design requirements.

// app/contact/page.tsx

import React from 'react';
import './ContactPage.css'; // Assuming you will create a CSS file for styles

const ContactPage: React.FC = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        We would love to hear from you! Please fill out the form below to get in touch.
      </p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" id="name" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="form-input" required />
        </div>
        <div className="form-group">
          <label htmlFor="message" className="form-label">Message</label>
          <textarea id="message" className="form-textarea" required></textarea>
        </div>
        <button type="submit" className="form-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;

### CSS (ContactPage.css)

You can create a CSS file named `ContactPage.css` to style the component according to your luxury theme:

/* ContactPage.css */

.contact-page {
  background-color: #000; /* Black background */
  color: #ff69b4; /* Pink text */
  padding: 2rem;
  border-radius: 8px;
  max-width: 600px;
  margin: auto;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
}

.contact-title {
  font-size: 2rem;
  margin-bottom: 1rem;
  text-align: center;
}

.contact-description {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  padding: 0.5rem;
  border: 1px solid #ff69b4; /* Pink border */
  border-radius: 4px;
  background-color: #222; /* Dark background for inputs */
  color: #fff; /* White text */
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #ff1493; /* Brighter pink on focus */
}

.form-button {
  padding: 0.75rem;
  background-color: #ff69b4; /* Pink button */
  color: #000; /* Black text */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.form-button:hover {
  background-color: #ff1493; /* Darker pink on hover */
}

This code provides a basic structure for a contact page with a form, styled to fit the luxury dark theme of your HouseIL website. You can further customize the styles and functionality as needed.