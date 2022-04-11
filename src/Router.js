import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import LoginSignup from './components/Nav/Modal/LoginSignup';
import Footer from './components/Footer';

import Main from './pages/Main';
import Staylist from './pages/Staylist';
import Staydetail from './pages/Staydetail';
import Hosting from './pages/Hosting';

function Router() {
  return (
    <BrowserRouter>
      <Nav />
      <LoginSignup />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/staylist" element={<Staylist />} />
        <Route path="/staydetail" element={<Staydetail />} />
        <Route path="/hosting" element={<Hosting />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Router;
