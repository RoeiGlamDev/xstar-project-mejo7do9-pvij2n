Here's a simple `Footer.tsx` component for your luxury dark AirBNB website named HouseIL, designed with an elegant and high-end aesthetic in pink and black colors. This component includes links and social media icons that you might find useful.

import React from 'react';
import './Footer.css'; // Assuming you have a CSS file for styling

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <h4>About Us</h4>
          <a href="/about">Our Story</a>
          <a href="/careers">Careers</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="footer-links">
          <h4>Help</h4>
          <a href="/faq">FAQ</a>
          <a href="/support">Support</a>
          <a href="/terms">Terms of Service</a>
          <a href="/privacy">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} HouseIL. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

### CSS (Footer.css)
You can create a `Footer.css` file to style the footer component. Here's a basic example:

.footer {
  background-color: #000;
  color: #ff69b4; /* Pink color */
  padding: 20px;
  text-align: center;
}

.footer-content {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.footer-links {
  margin: 10px;
}

.footer-links h4 {
  margin-bottom: 10px;
}

.footer-links a {
  color: #ff69b4; /* Pink color */
  text-decoration: none;
}

.footer-links a:hover {
  text-decoration: underline;
}

.footer-bottom {
  margin-top: 20px;
  font-size: 14px;
}

### Notes
- Make sure to adjust the links and paths according to your application's routing.
- You can customize the styles further to match your desired aesthetic.
- Ensure that you have the necessary dependencies installed for React and TypeScript in your project.