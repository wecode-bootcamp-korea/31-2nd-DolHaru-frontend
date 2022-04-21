import React, { useState } from 'react';
import styled from 'styled-components';

export const HostingFooter = ({
  goToNextStep,
  goToPrevStep,
  location,
  getStayInfo,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    getStayInfo();
    setIsClicked(!isClicked);
  };

  const getpercentage = path => {
    const completion = {
      '/hosting': '10%',
      '/hosting/location': '20%',
      '/hosting/floor-plan': '30%',
      '/hosting/amenities': '40%',
      '/hosting/photos': '50%',
      '/hosting/title': '60%',
      '/hosting/highlights': '70%',
      '/hosting/description': '80%',
      '/hosting/price': '90%',
    };
    return completion[path];
  };
  return (
    <RightFooter>
      <Indicator percentage={getpercentage(location.pathname)} />
      <GoBackBtn onClick={goToPrevStep}>뒤로</GoBackBtn>
      {location.pathname === '/hosting/price' ? (
        isClicked ? (
          <Loading onClick={handleClick}>업로드 중...</Loading>
        ) : (
          <CompleteBtn onClick={handleClick}>숙소 등록 완료하기</CompleteBtn>
        )
      ) : (
        <GoNextBtn onClick={goToNextStep}>다음</GoNextBtn>
      )}
    </RightFooter>
  );
};

export default HostingFooter;

const RightFooter = styled.div`
  ${({ theme }) => theme.flexBox('', 'center', 'space-between')}
  position: fixed;
  bottom: 0;
  right: 0;
  width: 50%;
  padding: 20px 50px;
  border-top: 2px solid lightgray;
  background-color: white;
  z-index: 4;
`;

const Indicator = styled.div`
  position: absolute;
  top: -2.5px;
  left: 0;
  width: ${({ percentage }) => percentage};
  border: 1.5px solid black;
`;

const GoBackBtn = styled.div`
  display: block;
  text-decoration: underline;
  font-weight: 500;
  cursor: pointer;
`;

const GoNextBtn = styled.div`
  padding: 15px 20px;
  border-radius: 5px;
  background-color: black;
  color: white;
  cursor: pointer;
`;

const CompleteBtn = styled(GoNextBtn)`
  background-color: #f22b55;
`;

const Loading = styled(GoNextBtn)``;
