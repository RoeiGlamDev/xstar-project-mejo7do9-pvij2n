Here's a `tailwind.config.ts` file tailored for a luxury dark AirBNB website named HouseIL, featuring an elegant design in pink and black colors. This configuration includes custom colors and extends the theme to suit your requirements.

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        // Custom colors for the luxury theme
        black: '#000000',
        pink: {
          light: '#ff77a1', // Light pink for accents
          DEFAULT: '#ff4d94', // Main pink color
          dark: '#c6005b', // Darker pink for hover states
        },
        gray: {
          dark: '#1a1a1a', // Dark gray for backgrounds
          DEFAULT: '#4a4a4a', // Default gray for text
        },
      },
      fontFamily: {
        // Custom font family for an elegant look
        sans: ['"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['"Georgia"', 'serif'],
      },
      spacing: {
        // Custom spacing for layout
        '128': '32rem',
        '144': '36rem',
      },
    },
  },
  variants: {
    extend: {
      // Add variants for hover and focus states
      backgroundColor: ['hover', 'focus'],
      textColor: ['hover', 'focus'],
    },
  },
  plugins: [],
};

export default config;
```

### Explanation:
- **Dark Mode**: The configuration enables dark mode using the `class` strategy, allowing you to toggle dark mode based on a class.
- **Custom Colors**: The colors are defined to match the luxury theme, with shades of pink and black, along with dark gray for backgrounds.
- **Font Family**: Custom font families are added to enhance the elegant design.
- **Spacing**: Additional spacing values are included for layout flexibility.
- **Variants**: Extended variants for background and text colors on hover and focus states to enhance interactivity.

Make sure to install Tailwind CSS and its dependencies in your React project to use this configuration effectively.