import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Registered = () => {
  const navigate = useNavigate();
  return (
    <Background>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        메인으로 돌아가기
      </Button>
    </Background>
  );
};

export default Registered;

const Background = styled.div`
  height: 100vh;
`;

const Button = styled.button`
  width: 300px;
  height: 100px;
`;
