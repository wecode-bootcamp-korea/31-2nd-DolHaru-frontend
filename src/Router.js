import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HostingRouter from './pages/Hosting/HostingRouter';
import User from './pages/User';
import Registered from './pages/Hosting/HostingPages/Registered';
import KakaoLogin from './components/KakaoLogin/KakaoLogin';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/*" element={<User />} />
        <Route path="/hosting/*" element={<HostingRouter />} />
        <Route path="/hosting/registered" element={<Registered />} />
        <Route path="/user/kakao/token" element={<KakaoLogin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
