import React, { useEffect, useState } from "react";
import SignupModal from "../components/Sign-Up/SignupModal";
import "./css/Signup.css";
import { useNavigate } from "react-router";
import { gapi } from "gapi-script";
import { clientId } from "../utils/index";
import { Modal, Button } from "react-bootstrap";

export default function Signup({ type }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    otp: null,
    mode: 0,
  });

  const [termsChecked, setTermsChecked] = useState(false);

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    otp: "",
  });

  const updateErrorMessage = (name, value) => {
    setErrorMessage((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const updateData = (name, value) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (!isModalOpen && !localStorage.getItem("token")) {
        setIsModalOpen(true);
        localStorage.setItem("isModalOpen", "true");
      }
    }, 10000);
  
    return () => clearTimeout(timeoutId);
  }, [isModalOpen]);
  
  useEffect(() => {
    const isModalOpenInStorage = localStorage.getItem("isModalOpen");
    if (isModalOpenInStorage === "true") {
      setIsModalOpen(true);
    }
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <SignupModal
        isModalOpen={isModalOpen}
        updateErrorMessage={updateErrorMessage}
        errorMessage={errorMessage}
        termsChecked={termsChecked}
        setTermsChecked={setTermsChecked}
        data={data}
        updateData={updateData}
      />
    </div>
  );
}
