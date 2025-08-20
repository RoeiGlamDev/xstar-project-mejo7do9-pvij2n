Here's a simple implementation of a Card component in TypeScript for your luxury dark Airbnb website named HouseIL. This component is styled with a pink and black color scheme to match your elegant design.

// components/ui/Card.tsx

import React from 'react';
import styled from 'styled-components';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  price: string;
}

const CardContainer = styled.div`
  background-color: #1a1a1a; /* Dark background */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
  color: #f8c8d0; /* Light pink text */
`;

const Title = styled.h2`
  font-size: 1.5rem;
  margin: 0;
`;

const Description = styled.p`
  font-size: 1rem;
  margin: 8px 0;
`;

const Price = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin: 0;
`;

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price }) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
      </Content>
    </CardContainer>
  );
};

export default Card;

### Explanation:
- **CardProps**: This interface defines the props that the Card component will accept, including the title, description, image URL, and price.
- **Styled Components**: The component uses `styled-components` for styling, which allows for scoped CSS and dynamic styling based on props.
- **Hover Effect**: The card has a subtle scaling effect on hover to enhance the user experience.
- **Color Scheme**: The colors are chosen to fit the luxury dark theme with pink accents.

### Usage:
You can use this Card component in your application like this:

<Card
  title="Luxury Villa"
  description="A beautiful luxury villa with stunning views."
  imageUrl="https://example.com/image.jpg"
  price="$500/night"
/>

Make sure to install `styled-components` if you haven't already:

npm install styled-components
npm install @types/styled-components
 

This will ensure that your component is styled correctly and works seamlessly within your React application.