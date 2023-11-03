import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; // Import Form from react-bootstrap
import './LogoutModal.css';
import { baseUrl } from '../../utils/index';
import axios from 'axios';

function SignupModal({ showModal, handleClose, handleLogout }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignup = async () => {

    // Regular expression to validate email
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    // Check if the email and password are empty
    if (!email || !password) {
        setMessage('Please fill in all the required fields.');
    } else if (!emailRegex.test(email)) {
        setMessage('Please enter a valid email address.');
    } else if (password.length < 8) {
        setMessage('Password must be at least 8 characters long.');
    }
    else {

    try {

        const response = await axios.post(`${baseUrl}/api/auth/sign-up`, {
          email: email,
          password: password,
        });

        setEmail('');
        setPassword('');
        
      } catch (err) {
        // Handle login error
        setMessage('Our servers are experiencing heavy traffic, please try again later.');
      }
    }
  };

  return (
    <div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-inner">
              <Modal.Header>
                <Modal.Title>
                  <h3>Signup to Continue</h3>
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p style={{color: 'red'}}>{message}</p>
                <Form.Group controlId="emailInput">
                  <Form.Label>Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </Form.Group>
                <Form.Group controlId="passwordInput">
                  <Form.Label>Password:</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Set your password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  style={{
                    borderRadius: '10px',
                    padding: '5px',
                    border: 'none',
                    color: 'white',
                    backgroundColor: '#850202',
                  }}
                  variant="primary"
                  onClick={handleSignup} // Call the handleSignup function on button click
                >
                  Signup
                </Button>
              </Modal.Footer>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SignupModal;
