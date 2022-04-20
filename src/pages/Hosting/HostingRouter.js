import React from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HostingFooter from './HostingComponents/HostingFooter';
import HostingNav from './HostingComponents/HostingNav';
import StayType from './HostingPages/StayType';
import SearchForm from './HostingPages/Location/SearchForm';
import FloorPlan from './HostingPages/FloorPlan/FloorPlan';
import Amenities from './HostingPages/Amenities/Amenities';

const HostingRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const newStayInfo = {};

  location.pathname === '/hosting' && localStorage.removeItem('stayInfo');

  const addInfo = newStayInfo => {
    let info = [];
    if (localStorage.getItem('stayInfo')) {
      info = JSON.parse(localStorage.getItem('stayInfo'));
    }
    info.push(newStayInfo);
    localStorage.setItem('stayInfo', JSON.stringify(info));
  };

  const removeInfo = () => {
    let storageInfo = JSON.parse(localStorage.getItem('stayInfo'));
    storageInfo.pop();
    localStorage.setItem('stayInfo', JSON.stringify(storageInfo));
  };

  const getPageTitle = path => {
    const title = {
      '/hosting': '게스트가 머무르게 될 숙소의 종류가 무엇인가요?',
      '/hosting/location': '숙소 위치는 어디인가요?',
      '/hosting/floor-plan': '숙소에서 맞이할 최대 인원수를 알려주세요',
      '/hosting/amenities': '숙소 편의시설 정보를 추가해 주세요',
    };
    return title[path];
  };

  const goToNextStep = () => {
    addInfo(newStayInfo);
    const hostingURL = {
      '/hosting': '/hosting/location',
      '/hosting/location': '/hosting/floor-plan',
      '/hosting/floor-plan': '/hosting/amenities',
    };
    navigate(hostingURL[location.pathname]);
  };

  const goToPrevStep = () => {
    removeInfo();
    navigate(-1);
  };

  return (
    <MainLayout>
      <MainLeft>
        <Logo>🗿 DolHaru</Logo>
        <MainQuestion>{getPageTitle(location.pathname)}</MainQuestion>
      </MainLeft>
      <MainRight>
        <HostingNav />
        <Routes>
          <Route path="/" element={<StayType newStayInfo={newStayInfo} />} />
          <Route
            path="/location"
            element={<SearchForm newStayInfo={newStayInfo} />}
          />
          <Route
            path="/floor-plan"
            element={<FloorPlan newStayInfo={newStayInfo} />}
          />
          <Route
            path="/amenities"
            element={<Amenities newStayInfo={newStayInfo} />}
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

export default HostingRouter;

const MainLayout = styled.main`
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

const Logo = styled.span`
  display: inline-block;
  margin: 60px 0 0 50px;
  color: white;
  font-family: ${({ theme }) => theme.fontLogo};
  font-size: ${({ theme }) => theme.fontMedium};
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
  padding: 60px 80px;
  color: white;
  overflow-wrap: break-word;
  line-height: 56px;
  font-size: 45px;
  font-weight: ${props => props.theme.weightMiddle};
`;
