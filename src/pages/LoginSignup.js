import React, { useEffect, useState } from "react";
import LoginForm from "../components/Login/LoginForm";
import SignupForm from "../components/LoginSignup/SignupForm";
import "./css/Signup.css";
import { useNavigate } from "react-router";

export default function LoginSignup({ type }) {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    otp: null,
    rememberMe: false,
  });
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

  return (
    <>
    <div className="bg"></div>
    <div className="container-signup">
      {type === "login" ? (
        <LoginForm
          data={data}
          setData={setData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          updateErrorMessage={updateErrorMessage}
        />
      ) : (
        <SignupForm
          data={data}
          setData={setData}
          errorMessage={errorMessage}
          setErrorMessage={setErrorMessage}
          updateErrorMessage={updateErrorMessage}
        />
      )}
    </div>
    </>
  );
}
