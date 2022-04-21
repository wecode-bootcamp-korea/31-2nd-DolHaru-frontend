import React from 'react';
import styled from 'styled-components';

const AmenitiesOption = ({
  id,
  text,
  icon,
  category,
  handleOptions,
  checkArr,
}) => {
  return (
    <Option
      onClick={() => {
        handleOptions(category, id);
      }}
      id={id}
      name={category}
      border={checkArr.includes(id) ? 'black' : '#dddddd'}
    >
      <OptionIconContainer>{icon}</OptionIconContainer>
      <OptionText>{text}</OptionText>
    </Option>
  );
};

export default AmenitiesOption;

const Option = styled.div`
  ${({ theme }) => theme.flexBox('column', 'center', 'space-between')}
  flex-basis: calc(33%);
  margin: 0 8px 16px 8px;
  padding: 40px 6px;
  border: 2px solid ${({ border }) => border};
  border-radius: 7px;

  &:hover {
    border: 2px solid black;
  }
`;

const OptionIconContainer = styled.div`
  margin-bottom: 10px;
`;

const OptionText = styled.div`
  font-size: ${({ theme }) => theme.fontMicro};
`;
