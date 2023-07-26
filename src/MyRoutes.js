import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
import Sponsors from './pages/Sponsors';
import Social from './pages/Social';
import News from './pages/News';
import Home from './pages/Home';
import SuccessStories from './pages/SuccessStories';
import Magazine from './pages/Magazine';
import Interviews from './pages/Interviews';
import Resources from './pages/Resources';
import Search from './pages/Search';
import LoginSignup from './pages/LoginSignup';
import NotFound from './pages/NotFound';
import LogoutButton from './components/LoginSignup/LogoutButton';
import Article from './components/SuccessStories/Article';

const MyRoutes = () => {
  const location = useLocation();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/social" element={<Social />} />
      <Route path="/news" element={<News />} /> */}
      <Route path="/success-stories" element={<SuccessStories />} />
      <Route path="/article/:id" element={<Article />} />
      {/* <Route path="/d2d" element={<Magazine />} />
      <Route path="/interviews" element={<Interviews />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/search" element={<Search />} /> */}
      <Route path="/login" element={<LoginSignup type="login" />} />
      <Route path="/sign-up" element={<LoginSignup type="sign-up" />} />
      <Route path="/logout" element={<LogoutButton />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MyRoutes;
