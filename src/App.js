import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import styled from 'styled-components';
import backgroundImage from './assets/background.jpg'; 

const App = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Overlay>
        <Content>
          <LeftSection>
            <Title>Your Space To Be Social.</Title>
            <Subtitle>
              Blast off today and join the fun! Getting started is only a few clicks away.
            </Subtitle>
            <Button>Learn More</Button>
            <Button>Our Features</Button>
          </LeftSection>
          <RightSection>
            <FormContainer>
              <FormTitle>Let's Prepare For Launch!</FormTitle>
              {isAuthenticated ? (
                <>
                  <LogoutButton />
                  <Profile />
                </>
              ) : (
                <LoginButton />
              )}
            </FormContainer>
          </RightSection>
        </Content>
      </Overlay>
    </Container>
  );
};

export default App;

// Styled components for minimalist design
const Container = styled.div`]
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  height: 100%;
  margin: 0 auto;
  color: white;
`;

const LeftSection = styled.div`
  flex: 1;
  padding: 40px;
`;

const RightSection = styled.div`
  flex: 1;
  padding: 10px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  background: #ff7f50;
  border: none;
  color: white;
`;

const FormContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;
