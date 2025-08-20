Here's a React component for a gradient background that fits the luxurious and elegant theme of your AirBNB website, HouseIL, using pink and black colors. This component is written in TypeScript and includes the necessary imports.

// components/animations/GradientBackground.tsx

import React from 'react';
import styled from 'styled-components';

const GradientBackgroundContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #000000, #ff007f);
  z-index: -1;
  opacity: 0.8;
`;

const GradientBackground: React.FC = () => {
  return <GradientBackgroundContainer />;
};

export default GradientBackground;

### Explanation:
- **Styled Components**: The `styled-components` library is used to create a styled `div` that serves as the gradient background.
- **Gradient**: The background is a linear gradient transitioning from black to a vibrant pink (`#ff007f`).
- **Opacity**: The opacity is set to `0.8` to give a subtle overlay effect, enhancing the luxurious feel.
- **Positioning**: The component is positioned absolutely to cover the entire viewport.

### Usage:
You can use this `GradientBackground` component in your main application file or any other component where you want to apply the gradient background. Just make sure to import it:

import GradientBackground from './components/animations/GradientBackground';

// Inside your component's render method
<GradientBackground />

Make sure you have `styled-components` installed in your project:

npm install styled-components

This will help you achieve the elegant and high-end design you are aiming for with your HouseIL website.