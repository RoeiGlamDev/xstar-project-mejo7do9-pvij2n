Here's a simple implementation of a button component in TypeScript for your luxury dark AirBNB website named HouseIL. This button component is styled to fit an elegant and high-end design using pink and black colors.

// components/ui/Button.tsx

import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const StyledButton = styled.button<{ variant: 'primary' | 'secondary'; disabled?: boolean }>`
  background-color: ${({ variant }) => (variant === 'primary' ? '#FF69B4' : '#000')};
  color: ${({ variant }) => (variant === 'primary' ? '#000' : '#FF69B4')};
  border: none;
  border-radius: 5px;
  padding: 12px 24px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ variant }) => (variant === 'primary' ? '#FF1493' : '#333')};
    color: #fff;
  }

  &:disabled {
    background-color: #555;
    color: #ccc;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, children, variant = 'primary', disabled = false }) => {
  return (
    <StyledButton onClick={onClick} variant={variant} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;

### Explanation:
- **Styled Components**: The button is styled using `styled-components` to create a clean and elegant design.
- **Props**: The button accepts `onClick`, `children`, `variant`, and `disabled` props.
  - `variant`: Determines the button's color scheme (primary or secondary).
  - `disabled`: If true, the button will be styled to indicate it's not clickable.
- **Hover Effects**: The button changes color on hover to enhance user interaction.

You can customize the styles further to match your specific design requirements.