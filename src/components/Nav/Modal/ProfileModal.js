import React from 'react';
import styled from 'styled-components';

const ProfileModal = ({ setProfileModal, openLoginModal }) => {
  return (
    <>
      <Main
        onClick={() => {
          setProfileModal(false);
        }}
      />
      <ProfileModalLatout>
        <BoxWrap>
          <BoxText>
            <BoxList onClick={openLoginModal}>회원 가입</BoxList>
            <BoxList onClick={openLoginModal}>로그인</BoxList>
            <BoxLine></BoxLine>
            <BoxList>숙소 호스팅 되기</BoxList>
            <BoxList>체험 호스팅하기</BoxList>
            <BoxList>도움말</BoxList>
          </BoxText>
        </BoxWrap>
      </ProfileModalLatout>
    </>
  );
};

export default ProfileModal;

const Main = styled.div`
  background-color: #000000;
  opacity: 0.2;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 9;
`;

const ProfileModalLatout = styled.div`
  position: absolute;
  top: 70px;
  left: -155px;
  z-index: 9;
  cursor: pointer;
`;

const BoxWrap = styled.div`
  width: 220px;
  height: 220px;
  margin-right: 110px;
  border-radius: 15px 15px 15px 15px;
  background-color: #fff;
  box-shadow: 3px 3px 3px #eeeeee;
`;

const BoxText = styled.ul`
  font-size: 14px;
  color: #323232;
`;

const BoxList = styled.li`
  padding: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
    opacity: 0.4;
  }
`;

const BoxLine = styled.li`
  border-bottom: 1px solid #d2d2d2;
`;
