import React from 'react';
import styled from 'styled-components';

const FloorPlanOption = ({ text, name, floorPlan, minusOne, plusOne }) => {
  return (
    <OptionContainer>
      <OptionName>{text}</OptionName>
      <BtnContainer>
        <CounterButton
          onClick={minusOne}
          name={name}
          value="-"
          disabled={floorPlan[name] === 0}
        >
          -
        </CounterButton>
        <Counter>{floorPlan[name]}</Counter>
        <CounterButton onClick={plusOne} name={name} value="+">
          +
        </CounterButton>
      </BtnContainer>
    </OptionContainer>
  );
};

export default FloorPlanOption;

const OptionContainer = styled.div`
  ${({ theme }) => theme.flexBox('', 'center', 'space-between')}
  margin-top: 20px;
  padding: 16px 10px;
`;
const OptionName = styled.div`
  font-size: ${({ theme }) => theme.fontMedium};
`;

const BtnContainer = styled.div`
  ${({ theme }) => theme.flexBox('', 'center', 'space-between')}
`;

const CounterButton = styled.button`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid #dddddd;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSemiMedium};

  &:hover {
    border: 1px solid black;
  }
`;

const Counter = styled.div`
  margin: 0 10px;
  width: 20px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSmall};
`;
