import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { motion } from 'framer-motion';

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ margin: '20px 0' }}
    >
      <img src={user.picture} alt={user.name} style={{ borderRadius: '50%', width: '100px' }} />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </motion.div>
  );
};

export default Profile;
