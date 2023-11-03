// ModalForm.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import "./SignupModal.css";
import SignupForm from "./SignupForm";
import Social from './Social';

function SignupModal({
  isModalOpen,
  updateErrorMessage,
  errorMessage,
  termsChecked,
  setTermsChecked,
  data,
  updateData,
}) {
  return (
    <div>
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-inner">
              <Modal.Header closeButton>
                <Modal.Title>
                  <h1 class="title">Sign Up to Continue</h1>
                </Modal.Title>
                <span class="logo">YouthStory.in</span>
              </Modal.Header>
              <Modal.Body>
                <SignupForm
                  updateErrorMessage={updateErrorMessage}
                  errorMessage={errorMessage}
                  termsChecked={termsChecked}
                  setTermsChecked={setTermsChecked}
                  data={data}
                  updateData={updateData}
                />
              </Modal.Body>
              <Modal.Footer className="login">
              <div className="or-sign-up-with">
              <div className="line"></div>
              <div className="or-text">or</div>
              <div className="line"></div>
            </div>
             <Social />
             <span className="registered">
                Already Regsitered?{" "}
                <a class="link" href="/login">
                  Login
                </a>
                </span>
              </Modal.Footer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupModal;
