import React, { useState, useEffect } from "react";
import InputForm from "../InputForm";
import axios from "axios";
import "./LoginForm.css";
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

function LoginForm({
  updateErrorMessage,
  errorMessage,
  termsChecked,
  setTermsChecked,
  data,
  updateData,
}) {

    const [loading, setLoading] = useState(false);

    const inputStyles = {
      color: "white",
    };
  
    const [showPassword, setShowPassword] = useState(false);
  
    const toggleShowPassword = () => {
      setShowPassword(!showPassword);
    };
  
    const handleLoginForm = async (e) => {
      if (!loading) {
        setLoading(true);
  
        // await submitLoginForm(e);
  
        setLoading(false);
      }
    };

 return (
    <div class="container">
     <p class="header">Login</p>
     <p>Just some details to get you in!</p>
    {/* <form className="form"> */}
      {/* <p style={{ color: "red" }}>{errorMessage}</p> */}
      {/* <RoundedTextField
        label="Name"
        id="name"
        value={data.name}
        variant="outlined"
        InputProps={{ style: inputStyles }}
        fullWidth
        margin="normal"
        onChange={(e) => updateData("name", e.target.value)}
      />
      <InputLabel style={{ color: "red" }} htmlFor="name">
        {errorMessage.name}
      </InputLabel>
      <RoundedTextField
        value={data.username}
        id="username"
        onChange={(e) => updateData("username", e.target.value)}
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
        onChange={(e) => updateData("email", e.target.value)}
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
        onChange={(e) => updateData("password", e.target.value)}
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
          handleLoginForm(e);
        }}
        type="submit"
        className="submit-button"
        disabled={loading}
      >
        {loading ? "Logging in..." : "Login"}
      </button>
    </form> */}
    </div>
  );
}

export default LoginForm;