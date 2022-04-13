import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import HostingFooter from './HostingComponents/HostingFooter';
import HostingNav from './HostingComponents/HostingNav';
import SearchForm from './HostingPages/Location/SearchForm';
import styled from 'styled-components';
import PrivacyType from './HostingPages/StayType';

const Customer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const newStayInfo = {};
  let mainQuestion = '';

  //TODO : 추후 switch 문으로 변경예정
  if (location.pathname === '/hosting') {
    mainQuestion = '게스트가 머무르게 될 숙소의 종류가 무엇인가요?';
  } else if (location.pathname === '/hosting/location') {
    mainQuestion = '숙소 위치는 어디인가요?';
  }

  //TODO : 추후 Switch 문으로 변경예정
  const goToNextStep = () => {
    if (location.pathname === '/hosting') {
      navigate('/hosting/location');
    }
  };

  //TODO : 추후 switch 문으로 변경예정
  const goToPrevStep = () => {
    if (location.pathname === '/hosting/location') {
      navigate('/hosting');
    }
  };

  return (
    <MainLayout>
      <MainLeft>
        <Logo>🗿 DolHaru</Logo>
        <MainQuestion>{mainQuestion}</MainQuestion>
      </MainLeft>
      <MainRight>
        <HostingNav />
        <Routes>
          <Route path="/" element={<PrivacyType newStayInfo={newStayInfo} />} />
          <Route
            path="/location"
            element={<SearchForm newStayInfo={newStayInfo} />}
          />
        </Routes>
        <HostingFooter
          goToNextStep={goToNextStep}
          goToPrevStep={goToPrevStep}
        />
      </MainRight>
    </MainLayout>
  );
};

export default Customer;

const MainLayout = styled.main`
  display: flex;
  height: 100vh;
  overflow: hidden;
`;

const Logo = styled.span`
  display: inline-block;
  margin: 60px 0 0 50px;
  font-family: ${props => props.theme.fontLogo};
  font-size: ${props => props.theme.fontMedium};
  color: white;
`;

const MainLeft = styled.div`
  width: 50%;
  background: rgb(210, 37, 118);
  background: linear-gradient(
    180deg,
    rgba(210, 37, 118, 1) 0%,
    rgba(81, 26, 159, 1) 100%
  );
`;

const MainRight = styled.div`
  width: 50%;
  position: relative;
`;

const MainQuestion = styled.h2`
  position: absolute;
  top: 35%;
  left: 0;
  width: 50%;
  padding: 60px;
  color: white;
  line-height: 56px;
  font-size: 45px;
  font-weight: ${props => props.theme.weightMiddle};
`;
