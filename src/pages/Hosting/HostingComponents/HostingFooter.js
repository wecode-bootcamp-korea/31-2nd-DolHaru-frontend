import React from 'react';
import styled from 'styled-components';

export const HostingFooter = ({
  goToNextStep,
  goToPrevStep,
  location,
  getStayInfo,
}) => {
  return (
    <RightFooter>
      <Indicator />
      <GoBackBtn onClick={goToPrevStep}>뒤로</GoBackBtn>
      {location.pathname === '/hosting/price' ? (
        <CompleteBtn onClick={getStayInfo}>숙소 등록 완료하기</CompleteBtn>
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
  top: -2px;
  left: 0;
  width: 20%;
  border: 1px solid black;
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
