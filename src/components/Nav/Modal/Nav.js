import React, { useState } from 'react';
import styled from 'styled-components';
import { IoEarthOutline } from 'react-icons/io5';
import { GrMenu } from 'react-icons/gr';
import { FaSearch } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import LoginSignup from './LoginSignup';
import ProfileModal from './ProfileModal';
import DateModal from './DateModal';
import LocationModal from './LocationModal';
import PersonnelModal from './PersonnelModal';

const Nav = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLocationModalOpen, setIsLocationModalOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [personnelCount, setPersonnelCount] = useState({
    adult: 0,
    children: 0,
    pet: 0,
  });

  const sumPersonnel =
    personnelCount.adult + personnelCount.children + personnelCount.pet;

  const navigate = useNavigate();

  const openLoginModal = () => {
    setLoginModal(!loginModal);
    setProfileModal(!profileModal);
  };

  const openProfileModal = () => {
    setProfileModal(!profileModal);
  };

  const openDateModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const openLocationModal = () => {
    setIsLocationModalOpen(!isLocationModalOpen);
  };

  const openGuestModal = () => {
    setIsGuestModalOpen(!isGuestModalOpen);
  };

  return (
    <>
      {loginModal && <LoginSignup setLoginModal={setLoginModal} />}
      <NavLayout>
        <NavWrap>
          <NavLogo
            onClick={() => {
              navigate('/');
            }}
          >
            <div>
              <img width="40px" src="/images/Nav/logoW.png" alt="logo" />
            </div>
            <div>DolHaru</div>
          </NavLogo>
          <NavSearchBar>
            <NavSearchL onClick={openLocationModal}>
              <TextWrap>
                <NavSearchLText>위치</NavSearchLText>
                <NavSearchInput>어디로 가세요?</NavSearchInput>
                {isLocationModalOpen && (
                  <LocationModal
                    setIsLocationModalOpen={setIsLocationModalOpen}
                  />
                )}
              </TextWrap>
            </NavSearchL>
            <NavSearchM onClick={openDateModal}>
              <TextWrap>
                <NavSearchMText>체크인/체크아웃</NavSearchMText>
                <NavSearchMTextColor>날짜 입력</NavSearchMTextColor>
                {isModalOpen && <DateModal />}
              </TextWrap>
            </NavSearchM>
            <NavSearchR>
              <TextWrap onClick={openGuestModal}>
                <NavSearchRText>인원</NavSearchRText>
                <NavSearchRTextColor>
                  {sumPersonnel > 0
                    ? `게스트 ${sumPersonnel}명`
                    : '게스트 추가'}
                </NavSearchRTextColor>
                {isGuestModalOpen && (
                  <PersonnelModal
                    setIsGuestModalOpen={setIsGuestModalOpen}
                    setPersonnelCount={setPersonnelCount}
                    adultCount={personnelCount.adult}
                    childrenCount={personnelCount.children}
                    petCount={personnelCount.pet}
                  />
                )}
              </TextWrap>
              <NavSearchBtn>
                <NavSearchBtnIcon>
                  <FaSearch></FaSearch>
                </NavSearchBtnIcon>
              </NavSearchBtn>
            </NavSearchR>
          </NavSearchBar>
          <NavRight>
            <Navhost>호스트 되기</Navhost>
            <NavIcon>
              <IoEarthOutline />
            </NavIcon>
            <IconBox>
              <GrMenu />
              <FaUserCircle onClick={openProfileModal} />
              {profileModal && (
                <ProfileModal
                  openLoginModal={openLoginModal}
                  setProfileModal={setProfileModal}
                />
              )}
            </IconBox>
          </NavRight>
        </NavWrap>
      </NavLayout>
    </>
  );
};

export default Nav;

const NavLayout = styled.div`
  width: 100%;
  background-color: #fff;
`;

const NavWrap = styled.div`
  max-width: 1300px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: transparent;
  margin: 0 auto;
  box-shadow: 0 4px 4px -4px #dddddd;
`;

const NavLogo = styled.div`
  display: flex;
  align-items: center;
  color: #ff385c;
  font-family: ${props => props.theme.fontLogo};
  font-size: 23px;
  div {
    margin-right: 4px;
    font-weight: 700;
  }
`;

const NavSearchBar = styled.div`
  background-color: #fff;
  width: 550px;
  height: 53px;
  margin: 0 auto;
  border-radius: 50px;
  border: 1px solid #c8c8c8;
  display: flex;
  box-shadow: 1px 2px 2px #dddddd;
`;

const NavSearchL = styled.div`
  width: 33%;
  padding: 8px 15px 15px 30px;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
    background-color: #eee;
    border-radius: 40px;
  }
`;

const TextWrap = styled.div`
  border-right: 1px solid #d2d2d2;
  height: 33px;
`;

const NavSearchM = styled.div`
  width: 33%;
  padding: 8px;
  font-size: 13px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
    background-color: #eee;
    border-radius: 40px;
  }
`;

const NavSearchR = styled.div`
  width: 33%;
  padding: 8px;
  font-size: 13px;
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
    background-color: #eee;
    border-radius: 40px;
  }
`;

const NavSearchLText = styled.div`
  margin-bottom: 5px;
`;

const NavSearchInput = styled.div`
  margin-bottom: 50px;
  border: 0 solid;
  width: 100px;
  font-size: 13px;
  outline: none;
`;

const NavSearchMText = styled.div`
  margin-bottom: 5px;
`;

const NavSearchMTextColor = styled.div`
  margin-bottom: 5px;
  color: grey;
`;

const NavSearchRText = styled.div`
  margin-bottom: 5px;
`;

const NavSearchRTextColor = styled.div`
  margin-bottom: 5px;
  color: grey;
`;

const NavSearchBtn = styled.div`
  width: 44px;
  height: 44px;
  background-color: #ff385c;
  border-radius: 50px;
  position: absolute;
  right: 0;
  top: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavSearchBtnIcon = styled.div`
  font-size: 15px;
  color: #fff;
  margin-right: 0;
`;

const NavRight = styled.div`
  display: flex;
  width: 220px;
  height: 50px;
  color: black;
`;

const Navhost = styled.span`
  width: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
    background-color: #eee;
    border-radius: 50px;
    width: 130px;
  }
`;

const NavIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 20px;
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    color: black;
    background-color: #eee;
    border-radius: 50px;
  }
`;

const IconBox = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #dddddd;
  width: 77px;
  height: 42px;
  padding: 5px 5px 5px 12px;
  margin-top: 5px;
  border-radius: 30px 30px 30px 30px;
  font-size: 23px;
  color: black;
  cursor: pointer;
`;
