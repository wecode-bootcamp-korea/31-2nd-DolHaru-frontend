import React, { useState } from 'react';
import styled from 'styled-components';

const Title = ({ newStayInfo }) => {
  const [textCounter, setTextCounter] = useState('');

  const countText = e => {
    const { value } = e.target;
    newStayInfo.title = value;
    setTextCounter(value.length);
  };

  return (
    <PageContainer>
      <ContentWrapper>
        <StayTitle>숙소 이름 정하기</StayTitle>
        <TitleTextarea
          onChange={countText}
          placeholder="제주의 아름다운 숙소"
          maxLength={49}
        />
        <TitleCounter>{textCounter > 0 ? textCounter : 0}/50</TitleCounter>
      </ContentWrapper>
    </PageContainer>
  );
};

export default Title;

const PageContainer = styled.div`
  height: 100vh;
  margin: 0;
`;

const ContentWrapper = styled.div`
  position: relative;
  top: 50%;
  width: 65%;
  transform: translateY(-50%);
  margin: 0 auto;
`;

const StayTitle = styled.h1`
  margin-bottom: 30px;
  font-size: ${({ theme }) => theme.fontMedium};
`;

const TitleTextarea = styled.textarea`
  width: 100%;
  height: 150px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  resize: none;
  font-size: ${({ theme }) => theme.fontMedium};

  &:focus {
    outline: none;
  }
`;

const TitleCounter = styled.div``;
