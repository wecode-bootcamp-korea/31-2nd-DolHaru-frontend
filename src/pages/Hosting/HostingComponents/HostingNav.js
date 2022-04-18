import React from 'react';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

const HostingNav = () => {
  return (
    <HostingNavWrapper>
      <NavBtn>
        <SendOutlinedIcon />
        슈퍼호스트에게 물어보기
      </NavBtn>
      <NavBtn>도움말</NavBtn>
      <NavBtn>저장 및 나가기</NavBtn>
    </HostingNavWrapper>
  );
};

export default HostingNav;

const HostingNavWrapper = styled.div`
  ${({ theme }) => theme.flexBox('', 'center', 'flex-end')}
  position: fixed;
  right: 50px;
  top: 30px;
  z-index: 3;
`;

const NavBtn = styled(Button)`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: black;
  border-radius: 35px;
  color: white;
  outline: none;
  font-size: 12px;

  &:focus,
  &:hover {
    background-color: white;
    color: black;
  }
`;
