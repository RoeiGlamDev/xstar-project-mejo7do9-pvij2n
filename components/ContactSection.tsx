Here's a React component for a contact section of your luxury dark Airbnb website named HouseIL. This component is styled with a high-end design in pink and black colors.

// components/ContactSection.tsx

import React from 'react';
import './ContactSection.css'; // Assuming you will create a CSS file for styles

const ContactSection: React.FC = () => {
    return (
        <section className="contact-section">
            <div className="contact-container">
                <h2 className="contact-title">Get in Touch</h2>
                <p className="contact-description">
                    We would love to hear from you! Whether you have a question about our properties, need assistance, or just want to say hello, feel free to reach out.
                </p>
                <form className="contact-form">
                    <input
                        type="text"
                        placeholder="Your Name"
                        className="contact-input"
                        required
                    />
                    <input
                        type="email"
                        placeholder="Your Email"
                        className="contact-input"
                        required
                    />
                    <textarea
                        placeholder="Your Message"
                        className="contact-textarea"
                        required
                    />
                    <button type="submit" className="contact-button">
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;

### CSS (ContactSection.css)

You can create a CSS file named `ContactSection.css` to style the component. Here’s an example of how you might style it:

/* components/ContactSection.css */

.contact-section {
    background-color: #000; /* Black background */
    color: #ff69b4; /* Pink text */
    padding: 50px 20px;
    text-align: center;
}

.contact-container {
    max-width: 600px;
    margin: 0 auto;
}

.contact-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.contact-description {
    font-size: 1.2rem;
    margin-bottom: 30px;
}

.contact-form {
    display: flex;
    flex-direction: column;
}

.contact-input,
.contact-textarea {
    padding: 15px;
    margin-bottom: 20px;
    border: 1px solid #ff69b4; /* Pink border */
    border-radius: 5px;
    background-color: #222; /* Dark background for inputs */
    color: #fff; /* White text */
    font-size: 1rem;
}

.contact-textarea {
    resize: none;
    height: 100px;
}

.contact-button {
    padding: 15px;
    background-color: #ff69b4; /* Pink background */
    color: #000; /* Black text */
    border: none;
    border-radius: 5px;
    font-size: 1rem;
    cursor: pointer;
    transition: background-color 0.3s;
}

.contact-button:hover {
    background-color: #ff1493; /* Darker pink on hover */
}

### Usage

You can use the `ContactSection` component in your main application file or any other component like this:

import React from 'react';
import ContactSection from './components/ContactSection';

const App: React.FC = () => {
    return (
        <div>
            {/* Other components */}
            <ContactSection />
            {/* Other components */}
        </div>
    );
};

export default App;

This setup will give you a stylish contact section that fits the luxurious theme of your HouseIL website.