import React, { useEffect, useState } from "react";
import SignupModal from "../components/Sign-Up/SignupModal";
import "./css/Signup.css";
import { useNavigate } from "react-router";
import { gapi } from "gapi-script";
import { clientId } from "../utils/index";
import { Modal, Button } from "react-bootstrap";
import D2DLogo from './D2DLogo.png';

export default function Signup({ type, isModalOpen, setIsModalOpen }) {
  
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

  return (
    <div>
      {/* <img src={D2DLogo} /> */}
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
