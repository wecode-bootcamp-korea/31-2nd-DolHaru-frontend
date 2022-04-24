import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Registered = () => {
  const navigate = useNavigate();
  return (
    <>
      <BackgroundVideoContainer autoPlay muted loop type="video/mp4">
        <source src="/images/Hosting/Fireworks.mp4" />
      </BackgroundVideoContainer>
      <Layer>
        <CongratsWrapper>
          <Congrats>축하합니다!</Congrats>
          <SubDescription>
            돌하룻밤 호스트가 되신 것을 환영합니다. 이제 호스팅의 매력을 경험해
            보세요.
          </SubDescription>
          <SubDescription>-돌하룻밤 드림</SubDescription>
          <Button
            onClick={() => {
              navigate('/staylist');
            }}
          >
            내 숙소 확인하기
          </Button>
        </CongratsWrapper>
      </Layer>
    </>
  );
};

export default Registered;

// const Background = styled.div`
//   height: 100vh;
// `;

// const Button = styled.button`
//   width: 300px;
//   height: 100px;
// `;

const Layer = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
`;

const BackgroundVideoContainer = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;

const Congrats = styled.div`
  ${({ theme }) => theme.flexBox('')}
  font-size: 70px;
  color: white;
  margin-bottom: 40px;
`;

const CongratsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const SubDescription = styled.div`
  font-size: 20px;
  color: white;
  text-align: center;
  margin-bottom: 15px;
`;

const Button = styled.button`
  background-color: #f22b55;
  color: white;
  padding: 15px 20px;
  border-radius: 5px;
  outline: none;
  border: none;
  margin-top: 15px;
  font-size: 15px;

  &:hover {
    background-color: white;
    color: black;
  }
`;
