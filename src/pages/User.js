import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from '../components/Modal/Nav';
import Main from './Main';
import Staydetail from '../pages/Staydetail/Staydetail';
import Staylist from './Staylist/Staylist';

const User = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/staylist" element={<Staylist />} />
        <Route path="/staydetail/:id" element={<Staydetail />} />
      </Routes>
    </>
  );
};

export default User;
