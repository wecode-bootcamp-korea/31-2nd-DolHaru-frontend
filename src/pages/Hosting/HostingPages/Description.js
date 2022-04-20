import React, { useState } from 'react';
import styled from 'styled-components';

const Description = ({ newStayInfo }) => {
  const [textCounter, setTextCounter] = useState('');

  const countText = e => {
    const { value } = e.target;
    newStayInfo.description = value;
    setTextCounter(value.length);
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <StayDescription>숙소 설명 작성하기</StayDescription>
        <DescriptionTextarea
          onChange={countText}
          placeholder="편안함을 자랑하는 이곳에서 즐거운 시간을 보내실 수 있을 것입니다."
          maxLength={499}
        />
        <DescriptionCounter>
          {textCounter > 0 ? textCounter : 0}/500
        </DescriptionCounter>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Description;

const PageContainer = styled.div`
  height: 100vh;
  margin: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  top: 50%;
  width: 75%;
  transform: translateY(-50%);
  margin: 0 auto;
`;

const StayDescription = styled.h1`
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontSemiMedium};
`;

const DescriptionTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  padding: 20px;
  border-radius: 10px;
  font-size: ${({ theme }) => theme.fontSmall};
  resize: none;

  &:focus {
    outline: none;
  }
`;

const DescriptionCounter = styled.div``;
