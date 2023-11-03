import React, { useEffect, useState } from "react";
import SignupModal from "../components/Login/LoginModal";
import "./css/Login.css";
import { useNavigate } from "react-router";
import { gapi } from "gapi-script";
import { clientId } from "../utils/index";
import { Modal, Button } from "react-bootstrap";

export default function Login({ type }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState({
    username: "",
    password: "",
    mode: 0,
  });

  const [errorMessage, setErrorMessage] = useState({
    username: "",
    password: "",
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

  const openModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div>
      <img src={D2DLogo} />
      <LoginModal
        isModalOpen={isModalOpen}
        updateErrorMessage={updateErrorMessage}
        errorMessage={errorMessage}
        data={data}
        updateData={updateData}
      />
    </div>
  );
}
