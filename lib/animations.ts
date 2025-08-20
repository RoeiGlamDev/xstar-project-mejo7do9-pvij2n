Certainly! Below is a sample `lib/animations.ts` file for your luxury dark Airbnb website named HouseIL. This file includes some utility functions for animations that you can use throughout your React components. The animations are designed to fit the elegant and high-end design you described.

```typescript
// lib/animations.ts

import { keyframes } from 'styled-components';

// Fade in animation
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Slide in from the left animation
export const slideInFromLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Slide in from the right animation
export const slideInFromRight = keyframes`
  0% {
    transform: translateX(100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

// Bounce animation
export const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

// Zoom in animation
export const zoomIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Exporting animation styles for use in components
export const animationStyles = {
  fadeIn: {
    animation: `${fadeIn} 0.5s ease-in-out`,
  },
  slideInFromLeft: {
    animation: `${slideInFromLeft} 0.5s ease-in-out`,
  },
  slideInFromRight: {
    animation: `${slideInFromRight} 0.5s ease-in-out`,
  },
  bounce: {
    animation: `${bounce} 1s infinite`,
  },
  zoomIn: {
    animation: `${zoomIn} 0.5s ease-in-out`,
  },
};
```

### Explanation:
- **Keyframes**: The animations are defined using `keyframes` from `styled-components`, which allows you to create CSS animations in a React-friendly way.
- **Animations**: Various animations are defined, including fade-in, slide-in from left/right, bounce, and zoom-in.
- **Exported Styles**: The `animationStyles` object provides a convenient way to apply these animations to your components.

### Usage:
You can use these animations in your components by importing the `animationStyles` and applying them to your styled components or inline styles. For example:

```tsx
import styled from 'styled-components';
import { animationStyles } from '../lib/animations';

const AnimatedDiv = styled.div`
  ${animationStyles.fadeIn}
`;

const MyComponent = () => {
  return <AnimatedDiv>Your content here</AnimatedDiv>;
};
```

Feel free to customize the animations and their durations to better fit your design vision!