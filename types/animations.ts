Certainly! Below is a sample `animationtypes.ts` file that you can use for your luxury dark Airbnb website named HouseIL. This file defines various animation types that can be used throughout your React components. The animations are designed to enhance the elegant and high-end design of your website.

```typescript
// src/animations/animationtypes.ts

import { keyframes } from 'styled-components';

// Fade In Animation
export const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

// Slide In Animation
export const slideIn = keyframes`
  0% {
    transform: translateY(20px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

// Scale Up Animation
export const scaleUp = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Bounce Animation
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

// Rotate Animation
export const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Pulse Animation
export const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Exporting all animations
const animations = {
  fadeIn,
  slideIn,
  scaleUp,
  bounce,
  rotate,
  pulse,
};

export default animations;
```

### Explanation:
- **Imports**: The `keyframes` function from `styled-components` is imported to create CSS animations.
- **Animations**: Several animations are defined, including `fadeIn`, `slideIn`, `scaleUp`, `bounce`, `rotate`, and `pulse`. Each animation has a specific keyframe definition to create the desired effect.
- **Export**: All animations are exported as a default object for easy access in your components.

You can use these animations in your styled components or any other React components to enhance the user experience on your luxury dark Airbnb website.