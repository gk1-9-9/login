import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// LoginButton component with animation
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <StyledButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => loginWithRedirect()}
    >
      Log In / Sign Up
    </StyledButton>
  );
};

export default LoginButton;

// Styled button with motion for animations
const StyledButton = styled(motion.button)`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  background: #ff7f50;
  border: none;
  color: white;
  margin: 5px;
`;
