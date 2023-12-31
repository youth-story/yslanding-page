import React, { useState, useEffect } from "react";
import InputForm from "../InputForm";
import axios from "axios";
import "./Form.css";
import InputLabel from "@mui/material/InputLabel";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { baseUrl } from "../../utils/index";
import PasswordField from "./PasswordField";
import { styled } from "@mui/system";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const RoundedTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 10px;
    background-color: transparent;
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  & .MuiInputLabel-root {
    color: white; // To change the default placeholder color
  }
  & .MuiInputBase-input::placeholder {
    color: white; // To change the default placeholder color
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white; // Change the border color on focus
  }
  & .MuiInputLabel-root.Mui-focused {
    color: white; // Change the placeholder color on focus
  }
  & .MuiInputBase-input::placeholder.Mui-focused {
    color: white; // Change the placeholder color on focus
  }
  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: white; // Change the border color on hover
  }
`;

const WhiteIconButton = styled(IconButton)`
  &.MuiIconButton-root {
    color: white; /* Apply red color to the icon */
  }
`;

const linkStyle = {
  textDecoration: 'none', // Remove underline from links
};

const Form = ({
  message,
  data,
  changeValue,
  errorMessage,
  submitSignupForm,
  termsChecked,
  setTermsChecked
}) => {
  const [loading, setLoading] = useState(false);

  const inputStyles = {
    color: "white",
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUpForm = async (e) => {
    if (!loading) {
      setLoading(true);

      await submitSignupForm(e);

      setLoading(false);
    }
  };

  return (
    <form className="form">
      <p style={{ color: "red" }}>{message}</p>
      <RoundedTextField
        label="Name"
        id="name"
        value={data.name}
        variant="outlined"
        InputProps={{ style: inputStyles }}
        fullWidth
        margin="normal"
        onChange={(e) => changeValue("name", e.target.value)}
      />
      <InputLabel style={{ color: "red" }} htmlFor="name">
        {errorMessage.name}
      </InputLabel>
      <RoundedTextField
        value={data.username}
        id="username"
        onChange={(e) => changeValue("username", e.target.value)}
        label="Username"
        variant="outlined"
        InputProps={{ style: inputStyles }}
        fullWidth
        margin="normal"
      />
      <InputLabel style={{ color: "red" }} htmlFor="username">
        {errorMessage.username}
      </InputLabel>
      <RoundedTextField
        value={data.email}
        id="email"
        onChange={(e) => changeValue("email", e.target.value)}
        label="Email"
        variant="outlined"
        InputProps={{ style: inputStyles }}
        fullWidth
        margin="normal"
      />
      <InputLabel style={{ color: "red" }} htmlFor="email">
        {errorMessage.email}
      </InputLabel>
      <RoundedTextField
        value={data.password}
        id="password"
        onChange={(e) => changeValue("password", e.target.value)}
        label="Password"
        variant="outlined"
        type={showPassword ? "text" : "password"}
        fullWidth
        margin="normal"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <WhiteIconButton
                onClick={toggleShowPassword}
                edge="end"
                aria-label="toggle password visibility"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </WhiteIconButton>
            </InputAdornment>
          ),
          style: inputStyles,
        }}
      />
      <InputLabel style={{ color: "red" }} htmlFor="password">
        {errorMessage.password}
      </InputLabel>
      <label>
        <input
          type="checkbox"
          checked={termsChecked}
          onChange={() =>
            setTermsChecked((prevTermsChecked) => !prevTermsChecked)
          }
        />
        <span style={{color: 'white'}}>
         I agree with{' '}
        <span style={linkStyle}>
          <a href="/privacy-policy">Privacy Policy</a>
        </span>{' '}
        and{' '}
        <span style={linkStyle}>
          <a href="/terms-of-use">Terms of Use</a>
        </span>
        </span>
      </label>
      <button
        onClick={(e) => {
          handleSignUpForm(e);
        }}
        type="submit"
        className="submit-button"
        disabled={loading}
      >
        {loading ? "Signing Up..." : "Signup"}
      </button>
    </form>
  );
};

export default Form;
