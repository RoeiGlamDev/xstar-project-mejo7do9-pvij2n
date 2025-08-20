Here's a React component for a `GlassCard` that fits the luxurious and elegant design you described for your AirBNB website, HouseIL. This component uses styled-components for styling, which allows for a clean and modular approach to styling in React.

// components/ui/GlassCard.tsx

import React from 'react';
import styled from 'styled-components';

interface GlassCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const CardContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  margin: 20px;
  color: #fff;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
  color: #ff69b4; // Pink color
`;

const Description = styled.p`
  font-size: 1rem;
  color: #e0e0e0; // Light gray for description
`;

const GlassCard: React.FC<GlassCardProps> = ({ title, description, imageUrl }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </CardContainer>
  );
};

export default GlassCard;

### Explanation:
- **CardContainer**: This styled component creates a glass-like effect using a semi-transparent background and a blur effect.
- **Image**: This component is used to display the image at the top of the card.
- **Content**: This wraps the title and description, providing padding and centering the text.
- **Title**: Styled to be prominent with a pink color.
- **Description**: Styled with a lighter gray color for contrast against the dark background.

### Usage:
You can use the `GlassCard` component in your application like this:

import GlassCard from './components/ui/GlassCard';

const App = () => {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <GlassCard 
        title="Luxury Villa" 
        description="Experience the elegance and comfort of our luxury villa." 
        imageUrl="https://example.com/image.jpg" 
      />
      {/* Add more GlassCard components as needed */}
    </div>
  );
};

export default App;

Make sure to install `styled-components` if you haven't already:

npm install styled-components

This component should fit well within the luxurious theme of your HouseIL website.