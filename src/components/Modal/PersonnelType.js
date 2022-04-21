import React from 'react';
import styled from 'styled-components';

const PersonnelType = ({
  id,
  title,
  subtitle,
  setPersonnelCount,
  adultCount,
  childrenCount,
  petCount,
}) => {
  const CountUp = () => {
    if (id === 1) {
      setPersonnelCount(prevCount => {
        return { ...prevCount, adult: prevCount.adult + 1 };
      });
    } else if (id === 2) {
      setPersonnelCount(prevCount => {
        return { ...prevCount, children: prevCount.children + 1 };
      });
    } else if (id === 3) {
      setPersonnelCount(prevCount => {
        return { ...prevCount, pet: prevCount.pet + 1 };
      });
    }
  };

  const handleCountDown = () => {
    if (id === 1) {
      if (adultCount < 1) return;
      setPersonnelCount(prevCount => {
        return { ...prevCount, adult: prevCount.adult - 1 };
      });
    } else if (id === 2) {
      if (childrenCount < 1) return;
      setPersonnelCount(prevCount => {
        return { ...prevCount, children: prevCount.children - 1 };
      });
    } else if (id === 3) {
      if (petCount < 1) return;
      setPersonnelCount(prevCount => {
        return { ...prevCount, pet: prevCount.pet - 1 };
      });
    }
  };

  return (
    <PersonnelTypes>
      <ContentWrap>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </ContentWrap>
      <CountWrap>
        <CountBtn onClick={handleCountDown}>-</CountBtn>
        <span>
          {id === 1 ? adultCount : id === 2 ? childrenCount : petCount}
        </span>
        <CountBtn onClick={CountUp}>+</CountBtn>
      </CountWrap>
    </PersonnelTypes>
  );
};

export default PersonnelType;

const PersonnelTypes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #ebebeb;
`;

const ContentWrap = styled.div``;

const Title = styled.h3``;

const SubTitle = styled.h3`
  font-size: 13px;
  color: #909090;
  line-height: 1.5;
`;

const CountWrap = styled.div`
  span {
    padding: 0 15px;
  }
`;

const CountBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #b5b5b5;
  background-color: transparent;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    color: #000;
    border: 1px solid #000;
  }
`;
