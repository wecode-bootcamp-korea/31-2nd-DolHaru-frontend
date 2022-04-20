import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HostingRouter from './pages/Hosting/HostingRouter';
import User from './pages/User';
import Main from './pages/Main';
import Staylist from './pages/Staylist/Staylist';
import Staydetail from '../src/pages/Staydetail/Staydetail';
import KakaoLogin from './components/KakaoLogin/KakaoLogin';
import Nav from '../src/components/Modal/Nav';
import Registered from './pages/Hosting/HostingPages/Registered';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/*" element={<User />} />
        <Route path="/hosting/*" element={<HostingRouter />} />
        <Route path="/hosting/registered" element={<Registered />} />
        <Route path="/staylist" element={<Staylist />} />
        <Route path="/staydetail" element={<Staydetail />} />
        <Route path="/login" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
