import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HostingRouter from './pages/Hosting/HostingRouter';
import User from './pages/User';
import Main from './pages/Main';
import Staylist from './pages/Staylist';
import Staydetail from './pages/Staydetail';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/user/*" element={<User />} />
        <Route path="/hosting/*" element={<HostingRouter />} />
        <Route path="/staylist" element={<Staylist />} />
        <Route path="/staydetail" element={<Staydetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
