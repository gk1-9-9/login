import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// LogoutButton component with animation
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <StyledButton
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </StyledButton>
  );
};

export default LogoutButton;

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
