'use client';

Certainly! Below is a React component for a ScrollReveal effect using TypeScript. This component can be used to create elegant animations for your luxury dark Airbnb website, HouseIL, with a focus on a high-end design in pink and black colors.

// components/animations/ScrollReveal.tsx

import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
  distance?: string;
  origin?: 'top' | 'bottom' | 'left' | 'right';
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  duration = 1000,
  delay = 200,
  distance = '30px',
  origin = 'bottom',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      ScrollReveal().reveal(ref.current, {
        duration,
        delay,
        distance,
        origin,
        opacity: 0,
        scale: 0.9,
      });
    }
  }, [duration, delay, distance, origin]);

  return <div ref={ref}>{children}</div>;
};

export default ScrollReveal;

### Explanation:
- **Imports**: The component imports `React`, `useEffect`, and `useRef` from React, and `ScrollReveal` from the `scrollreveal` library.
- **Props**: The `ScrollRevealProps` interface defines the props that can be passed to the component, including `children`, `duration`, `delay`, `distance`, and `origin`.
- **Ref**: A `ref` is created to reference the DOM element that will be animated.
- **Effect**: The `useEffect` hook initializes the ScrollReveal effect when the component mounts.
- **Return**: The component returns a `div` that wraps the children, which will be revealed on scroll.

### Usage:
You can use this `ScrollReveal` component to wrap any content you want to animate on scroll. For example:

import React from 'react';
import ScrollReveal from './components/animations/ScrollReveal';

const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: '50px' }}>
      <ScrollReveal duration={1200} delay={300} distance="50px" origin="top">
        <h1 style={{ color: '#ff69b4' }}>Welcome to HouseIL</h1>
      </ScrollReveal>
      <ScrollReveal duration={1200} delay={500} distance="50px" origin="left">
        <p>Your luxury getaway awaits.</p>
      </ScrollReveal>
    </div>
  );
};

export default HomePage;

Make sure to install the `scrollreveal` library if you haven't already:

npm install scrollreveal

This setup will help you create an elegant and high-end design for your website.