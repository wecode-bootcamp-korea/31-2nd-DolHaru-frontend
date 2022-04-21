import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import LoginSignup from '../components/Nav/Modal/LoginSignup';
import Main from './Main';
import Staydetail from './Staydetail';
import Staylist from './Staylist/Staylist';
import Footer from './../components/Footer';

const User = () => {
  return (
    <>
      <Nav />
      <LoginSignup />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/staylist" element={<Staylist />} />
        <Route path="/staydetail" element={<Staydetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default User;
