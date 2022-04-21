import React from 'react';
import styled from 'styled-components';

const StaylistFilterTab = ({
  name,
  clickedList,
  setClickedList,
  changeUrl,
}) => {
  const handleClickedList = () => {
    clickedList.includes(name)
      ? setClickedList(clickedList.filter(list => list !== name))
      : setClickedList([...clickedList, name]);
  };

  return (
    <TabList
      isChecked={clickedList.includes(name)}
      onClick={() => {
        handleClickedList();
        changeUrl();
      }}
    >
      {name}
    </TabList>
  );
};

export default StaylistFilterTab;

const TabList = styled.button`
  margin-right: 10px;
  padding: 10px 16px;
  background-color: ${props => props.theme.mainWhite};
  border: 1px solid ${({ isChecked }) => (isChecked ? 'black' : '#dbdbdb')};
  border-radius: 30px;
  cursor: pointer;
`;
