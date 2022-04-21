import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav/Modal/Nav';
import LoginSignup from '../components/Nav/Modal/LoginSignup';
import Main from './Main';
import Staydetail from './Staydetail';
import Staylist from './Staylist';
import Footer from './../components/Footer';
import KakaoLogin from '../components/Nav/Modal/KakaoLogin/KakaoLogin';

const User = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/staylist" element={<Staylist />} />
        <Route path="/staydetail" element={<Staydetail />} />
        <Route path="/kakao/token" element={<KakaoLogin />} />
      </Routes>
      <Footer />
    </>
  );
};

export default User;
