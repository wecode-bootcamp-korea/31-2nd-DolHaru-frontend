import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HostingRouter from './pages/Hosting/HostingRouter';
import User from './pages/User';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user/*" element={<User />} />
        <Route path="/hosting/*" element={<HostingRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
