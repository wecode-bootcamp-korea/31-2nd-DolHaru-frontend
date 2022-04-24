import React, { useState } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import HostingFooter from './HostingComponents/HostingFooter';
import HostingNav from './HostingComponents/HostingNav';
import StayType from './HostingPages/StayType';
import SearchForm from './HostingPages/Location/SearchForm';
import FloorPlan from './HostingPages/FloorPlan/FloorPlan';
import Amenities from './HostingPages/Amenities/Amenities';
import Photos from './HostingPages/Photos';
import Title from './HostingPages/Title';
import Highlights from './HostingPages/Highlights/Highlights';
import Description from './HostingPages/Description';
import Price from './HostingPages/Price';
import API from './../../config';

const HostingRouter = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [photos, setPhotos] = useState([]);
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
      '/hosting/amenities': '/hosting/photos',
      '/hosting/photos': '/hosting/title',
      '/hosting/title': '/hosting/highlights',
      '/hosting/highlights': '/hosting/description',
      '/hosting/description': '/hosting/price',
    };
    navigate(hostingURL[location.pathname]);
  };

  const goToPrevStep = () => {
    removeInfo();
    location.path === '/hosting/location' ? navigate('/hosting') : navigate(-1);
  };

  const getVideoPageTitle = path => {
    const title = {
      '/hosting/photos': '이제 숙소 사진을 올릴 차례입니다.',
      '/hosting/title': '숙소 이름을 만들어주세요.',
      '/hosting/highlights': '숙소에 대해 설명해 주세요.',
      '/hosting/description': '숙소에 대해 더욱 자세히 설명해 주세요',
      '/hosting/price': '이제 요금을 설정하실 차례입니다',
    };
    return title[path];
  };

  const showVideo = path => {
    const checkPathArr = [
      '/hosting/photos',
      '/hosting/title',
      '/hosting/highlights',
      '/hosting/description',
      '/hosting/price',
    ];
    return checkPathArr.includes(path);
  };

  const getStayInfo = () => {
    addInfo(newStayInfo);
    let storageInfo = JSON.parse(localStorage.getItem('stayInfo'));
    createFormData(storageInfo);
  };

  const createFormData = storageInfo => {
    //TODO : 추후 이 부분 리팩토링 할 것
    const stayType = storageInfo[0].stayType;
    const latitude = storageInfo[1].latitude;
    const longitude = storageInfo[1].longitude;
    const address = storageInfo[1].address;
    const totalGuest = storageInfo[2].totalGuest;
    const bed = storageInfo[2].bed;
    const bedroom = storageInfo[2].bedroom;
    const bathroom = storageInfo[2].bathroom;
    const amenities = storageInfo[3].amenities;
    const services = storageInfo[3].services;
    const title = storageInfo[5].title;
    const highlights = storageInfo[6].highlights;
    const description = storageInfo[7].description;
    const price = storageInfo[8].price;

    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('bed', bed);
    formData.append('bedroom', bedroom);
    formData.append('bathroom', bathroom);
    formData.append('maxAdult', totalGuest);
    formData.append('stayTypeID', stayType);
    formData.append('description', description);
    formData.append('address', address);
    formData.append('latitude', latitude);
    formData.append('longitude', longitude);
    for (let i = 0; i < services.length; i++) {
      formData.append('services', services[i]);
    }
    for (let i = 0; i < amenities.length; i++) {
      formData.append('amenities', amenities[i]);
    }
    for (let i = 0; i < highlights.length; i++) {
      formData.append('highlights', highlights[i]);
    }
    for (let i = 0; i < photos.length; i++) {
      formData.append('image', photos[i]);
    }
    sendData(formData);
    localStorage.removeItem('stayInfo');
  };

  const sendData = formData => {
    const token = localStorage.getItem('dollharu');
    fetch(API.hosting, {
      method: 'POST',
      headers: {
        Authorization: token,
        //   Authorization:
        //     'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.432mT0P65oRtOKje6TC-KmyBY62nLEXG_wVx57BA-MM',
      },
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        res.message === 'SUCCESS'
          ? navigate('/hosting/registered')
          : reRegister();
      });
  };

  const reRegister = () => {
    alert('숙소 정보를 잘못 입력하셨습니다. 처음부터 다시 등록하십시오');
    navigate('/hosting');
  };

  return (
    <MainLayout>
      {showVideo(location.pathname) ? (
        <MainLeftWithVideo>
          <BackgroundVideoContainer autoPlay muted loop type="video/mp4">
            <source src="/images/Hosting/Photographer.mp4" />
          </BackgroundVideoContainer>
          <Layer />
          <MainDescription>
            {getVideoPageTitle(location.pathname)}
          </MainDescription>
        </MainLeftWithVideo>
      ) : (
        <MainLeft>
          <Logo
            onClick={() => {
              navigate('/');
            }}
          >
            <LogoImg alt="logo" src="/images/Nav/logoW.png" />
            DolHaru
          </Logo>
          <MainQuestion>{getPageTitle(location.pathname)}</MainQuestion>
        </MainLeft>
      )}
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
          <Route
            path="/photos"
            element={<Photos newStayInfo={newStayInfo} setPhotos={setPhotos} />}
          />
          <Route path="/title" element={<Title newStayInfo={newStayInfo} />} />
          <Route
            path="/highlights"
            element={<Highlights newStayInfo={newStayInfo} />}
          />
          <Route
            path="/description"
            element={<Description newStayInfo={newStayInfo} />}
          />
          <Route path="/price" element={<Price newStayInfo={newStayInfo} />} />
        </Routes>
        <HostingFooter
          goToNextStep={goToNextStep}
          goToPrevStep={goToPrevStep}
          location={location}
          getStayInfo={getStayInfo}
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

const Logo = styled.div`
  ${({ theme }) => theme.flexBox('')}
  width: 50px;
  margin: 45px 0 0 80px;
  color: white;
  font-family: ${({ theme }) => theme.fontLogo};
  font-size: ${({ theme }) => theme.fontMedium};
  cursor: pointer;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const MainLeft = styled.div`
  width: 50%;
  background: linear-gradient(
    180deg,
    rgba(210, 37, 118, 1) 0%,
    rgba(81, 26, 159, 1) 100%
  );
`;

const MainRight = styled.div`
  position: relative;
  width: 50%;
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
  font-weight: ${({ theme }) => theme.weightMiddle};
`;

const MainLeftWithVideo = styled.div`
  width: 50%;
`;

const MainDescription = styled(MainQuestion)`
  top: 50%;
  width: 45%;
  padding-left: 40px;
  z-index: 2;
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  width: 50%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const BackgroundVideoContainer = styled.video`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
