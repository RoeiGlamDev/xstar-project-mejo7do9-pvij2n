Here's a React component for a particle background that you can use in your luxury dark Airbnb website named HouseIL. This component uses the `react-tsparticles` library to create a particle animation. Make sure to install the library first if you haven't done so:

npm install react-tsparticles

Now, you can create the `ParticleBackground.tsx` component as follows:

// src/components/ParticleBackground.tsx

import React from 'react';
import Particles from 'react-tsparticles';

const ParticleBackground: React.FC = () => {
  const particlesInit = async (main: any) => {
    // You can add custom shapes or presets here if needed
  };

  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#000000", // Black background
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 2,
            },
          },
        },
        particles: {
          color: {
            value: "#FF69B4", // Pink color for particles
          },
          links: {
            color: "#FF69B4", // Pink color for links
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 3,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 100, // Number of particles
          },
          opacity: {
            value: 0.5,
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1,
              sync: false,
            },
          },
          shape: {
            type: "circle", // Shape of particles
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 40,
              minimumValue: 0.1,
              sync: false,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;

### Explanation:
- **Background Color**: The background is set to black (`#000000`).
- **Particle Color**: The particles and links are set to a pink color (`#FF69B4`).
- **Particle Behavior**: The particles will bounce off the edges of the canvas and will respond to mouse interactions (click and hover).
- **Particle Count**: You can adjust the number of particles by changing the `value` in the `number` property.

### Usage:
You can use this `ParticleBackground` component in your main application file or any other component where you want to display the particle background.

// Example usage in App.tsx

import React from 'react';
import ParticleBackground from './components/ParticleBackground';

const App: React.FC = () => {
  return (
    <div>
      <ParticleBackground />
      {/* Other components go here */}
    </div>
  );
};

export default App;

This setup will give your website an elegant and high-end feel with the luxurious dark theme and pink accents.