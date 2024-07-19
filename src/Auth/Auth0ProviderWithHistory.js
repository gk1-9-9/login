import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithHistory = ({ children }) => {
  const navigate = useNavigate(); // Updated to use useNavigate
  const domain = process.env.REACT_APP_AUTH0_DOMAIN; // Fetching domain from .env
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID; // Fetching client ID from .env
  const redirectUri = window.location.origin;

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || '/chat');
  };

  return (
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      redirectUri={redirectUri}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  );
};

export default Auth0ProviderWithHistory;