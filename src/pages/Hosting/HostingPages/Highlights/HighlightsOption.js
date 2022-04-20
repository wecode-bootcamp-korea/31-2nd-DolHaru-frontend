import React from 'react';
import styled from 'styled-components';

const HighlightsOption = ({ id, text, icon, handleOptions, isChosen }) => {
  return (
    <Option
      onClick={() => {
        handleOptions(id);
      }}
      id={id}
      border={isChosen(id) ? 'black' : '#dddddd'}
      backgroundColor={isChosen(id) ? '#dddddd' : 'transparent'}
    >
      <IconContainer>{icon}</IconContainer>
      <TextContainer>{text}</TextContainer>
    </Option>
  );
};

export default HighlightsOption;

const Option = styled.div`
  width: auto;
  border: 1.5px solid ${({ border }) => border};
  background-color: ${({ backgroundColor }) => backgroundColor};
  ${({ theme }) => theme.flexBox('', 'center', 'space-between')}
  margin: 20px 10px 0 0;
  padding: 15px 15px;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontRegular};
  font-weight: ${({ theme }) => theme.weightlight};

  &:hover {
    border: 1.5px solid black;
  }
`;

const IconContainer = styled.div`
  margin-right: 10px;
`;

const TextContainer = styled.div``;
