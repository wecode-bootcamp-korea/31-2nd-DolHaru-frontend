import React from 'react';
import styled from 'styled-components';

export const StayType = ({ newStayInfo }) => {
  const updateStayType = e => {
    const { name } = e.target;
    newStayInfo.stayType = name;
  };

  return (
    <InputBox onClick={updateStayType}>
      <OptionBtn name="1" value="공간 전체" />
      <OptionBtn name="2" value="개인실" />
      <OptionBtn name="3" value="다인실" />
    </InputBox>
  );
};

const InputBox = styled.form`
  ${({ theme }) => theme.flexBox('column', 'center', 'space-between')}
  width: 100%;
  padding: 200px 120px;
  z-index: 3;
`;

const OptionBtn = styled.input.attrs(props => ({ type: 'button' }))`
  width: 464px;
  height: 90px;
  margin-top: 7px;
  padding: 35px 0 30px 35px;
  border: 2px solid lightgray;
  border-radius: 12px;
  background-color: white;
  font-size: ${({ theme }) => theme.fontRegular};
  text-align: left;
  cursor: pointer;

  &::value {
    color: black;
  }

  &:hover {
    border: 2px solid black;
  }

  &:focus {
    border: 2px solid black;
    background-color: ${({ theme }) => theme.mainGrey};
  }
`;
export default StayType;
