import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import About from './pages/About';
// import Sponsors from './pages/Sponsors';
// import Social from './pages/Social';
// import News from './pages/News';
// import Home from './pages/Home';
import SuccessStories from './pages/SuccessStories';
// import Magazine from './pages/Magazine';
// import Interviews from './pages/Interviews';
// import Resources from './pages/Resources';
// import Search from './pages/Search';
import Signup from './pages/Signup';
// import Home from './pages/Home';
// import Login from './pages/Login';
// import Contests from './pages/Contests';
// import Contest from './pages/Contest';
// import NotFound from './pages/NotFound';
// import LogoutButton from './components/Signup/LogoutButton';
// import Article from './components/SuccessStories/Article';
import DrawerAppBar from './components/AppBar/DrawerAppBar';
import SuccessStoryEditor from './components/SuccessStoryEditor/SuccessStoryEditor';
import jwt_decode from 'jwt-decode';
import AyushSingh from './AyushSingh';
import AribaKhan from './AribaKhan';
import BhavayGoyal from './BhavayGoyal';
import PalakhKhanna from './PalakhKhanna';
import SimoneSharma from './SimoneSharma';
import Temp from './Temp';
import SignupModal from './components/AppBar/SignupModal';
import LoginModal from './components/AppBar/Login';

const MyRoutes = () => {
  const location = useLocation();
  const [signedIn, setSignedIn] = React.useState(false);
  const [navItems, setNavItems] = useState( [
    {label: 'About', link: '/about'}, 
    {label: 'Success Stories', link: '/'}, 
    // {label: 'Contests', link: '/contests'}
  ]);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');
  
  //   if (token) {
  //     const decodedToken = jwt_decode(token);
  //     const currentTime = Date.now() / 1000;
  
  //     if (decodedToken.exp >= currentTime) {
  //       const updatedNavItems = [{ label: 'Logout', link: '/logout'}];
  
  //     setNavItems(prevNavItems => [...prevNavItems, ...updatedNavItems]);
  //     } else {
  //       const updatedNavItems = [{ label: 'Sign Up', link: '/sign-up'}];
  
  //     setNavItems(prevNavItems => [...prevNavItems, ...updatedNavItems]);
  //     }
  //   } else {
  //     const updatedNavItems = [{ label: 'Sign Up', link: '/sign-up'}];
  
  //     setNavItems(prevNavItems => [...prevNavItems, ...updatedNavItems]);
  //   }
  
  // }, []);  

  const shouldRenderDrawer = !['/sign-up', '/login'].includes(location.pathname);

  return (
    <>
      {shouldRenderDrawer && <DrawerAppBar navItems={navItems} />}
    <Routes>
      <Route path="/about" element={<About />} />
      {/* <Route path="/" element={<Home />} /> */}
      {/* <Route path="/social" element={<Social />} />
      <Route path="/news" element={<News />} /> */}
      <Route path="/" element={<SuccessStories />} />
      <Route path="/success-story/ayush-singh" element={<Temp><AyushSingh /></Temp>} />
      <Route path="/success-story/ariba-khan" element={<Temp><AribaKhan /></Temp> }/>
      <Route path="/success-story/bhavay-goyal" element={<Temp><BhavayGoyal /></Temp>} />
      <Route path="/success-story/palakh-khanna" element={<Temp><PalakhKhanna /></Temp>} />
      <Route path="/success-story/simone-sharma" element={<Temp><SimoneSharma /></Temp>} />
      {/* <Route path="/success-stories/:id" element={<Article />} /> */}
      {/* <Route path="/" element={<SuccessStoryEditor />} /> */}
      {/* <Route path="/d2d" element={<Magazine />} />
      <Route path="/interviews" element={<Interviews />} />
      <Route path="/resources" element={<Resources />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/sponsors" element={<Sponsors />} />
      <Route path="/search" element={<Search />} /> */}
      {/* <Route path="/contests" element={<Contests />} /> */}
      {/* <Route path="/contest/:id" element={<Contest />} /> */}
      {/* <Route path="/login" element={<LoginModal showModal={true} />} />
      <Route path="/sign-up" element={<SignupModal showModal={true} />} /> */}
      {/* <Route path="/logout" element={<LogoutButton />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    </>
  );
};

export default MyRoutes;
