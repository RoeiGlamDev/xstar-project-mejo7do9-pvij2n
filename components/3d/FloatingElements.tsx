Certainly! Below is a React component written in TypeScript for a floating element that you can use in your luxury dark Airbnb website named HouseIL. This component is styled with a pink and black color scheme to match your design requirements.

// components/3d/FloatingElements.tsx

import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #000; /* Black background */
  border-radius: 50%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }
`;

const FloatingIcon = styled.div`
  width: 30px;
  height: 30px;
  background-color: #ff69b4; /* Pink color */
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
`;

const FloatingElements: React.FC = () => {
  return (
    <FloatingContainer>
      <FloatingIcon>
        <span>+</span> {/* Replace with an icon or SVG as needed */}
      </FloatingIcon>
    </FloatingContainer>
  );
};

export default FloatingElements;

### Explanation:
- **FloatingContainer**: This styled component serves as the main container for the floating element. It is positioned fixed at the bottom right of the screen, has a black background, and a circular shape.
- **FloatingIcon**: This styled component represents the icon inside the floating element. It has a pink background and can contain any icon or text.
- **Hover Effect**: The floating element has a hover effect that slightly lifts it up when the user hovers over it, adding an interactive feel.

### Usage:
You can import and use the `FloatingElements` component in your main application file or any other component where you want the floating element to appear.

import FloatingElements from './components/3d/FloatingElements';

// Inside your main component
<FloatingElements />

Feel free to customize the icon and styles further to fit your specific design needs!