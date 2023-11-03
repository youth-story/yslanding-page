import React, { useState, useEffect } from "react";
import MyRoutes from "./MyRoutes";
import { useNavigate, useLocation } from "react-router";
import jwt_decode from "jwt-decode";
import Signup from "./pages/Signup";

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [tokenExpired, setTokenExpired] = useState(false);

  // useEffect(() => {
  //   const token = localStorage.getItem('token');

  //   if (token) {
  //     const decodedToken = jwt_decode(token);
  //     const currentTime = Date.now() / 1000; // Get current time in seconds

  //     if (decodedToken.exp >= currentTime) {
  //       // If token is valid, prevent navigation to login and sign-up routes
  //       if (location.pathname === '/login' || location.pathname === '/sign-up') {
  //         navigate('/');
  //       }
  //     }
  //   }
  // }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    console.log("Inside the first useEffect");
    const isModalOpenInStorage = localStorage.getItem("isModalOpen");
    if (isModalOpenInStorage === "true") {
      setIsModalOpen(true);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!isModalOpen && !localStorage.getItem("token")) {
        setIsModalOpen(true);
        localStorage.setItem("isModalOpen", "true");
      }
    }, 10000);

    return () => clearTimeout(timeoutId);
  }, [isModalOpen]);

  return (
    <div>
    {/* <Signup openModal={openModal} setIsModalOpen={setIsModalOpen} /> */}
      <MyRoutes tokenExpired={tokenExpired} />
    </div>
  );
}
