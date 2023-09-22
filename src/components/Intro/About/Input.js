import React, { useState } from 'react';
import styles from './Input.module.css';
import { FaArrowRight } from 'react-icons/fa'; // Import the Font Awesome arrow icon

export default function Input({ email, handleEmailChange, disabled, setDisabled }) {
    // const [email, setEmail] = useState('');
    const [isValidated, setIsValidated] = useState(false);

    const handleInputChange = (e) => {
        const newValue = e.target.value;
        handleEmailChange(newValue);
    };

    const handleValidationClick = () => {
        // Basic email validation (you can use a more robust validation library)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);

        if (isValidEmail) {
            setIsValidated(true);
            setDisabled(true); // Disable the input field and button upon successful registration
        } else {
            setIsValidated(false);
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <input
                    type="email"
                    id="email-input"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleInputChange}
                    className={isValidated ? styles.greenInput : ''}
                    style={{ borderBottom: isValidated ? '2px solid green' : '' }}
                    disabled={disabled} // Add disabled attribute
                />
                {isValidated && <FaArrowRight className={styles.greenArrow} />}
            </div>
            {isValidated ? (
                <label htmlFor="email-input" style={{ color: 'green' }}>
                    Successfully Registered!
                </label>
            ) : (
                <label htmlFor="email-input">
                    We're really honest guys and promise not to send you ads. We will write only once when our platform is ready.
                </label>
            )}
            <button className={styles.validationButton} onClick={handleValidationClick} disabled={disabled}>
                <FaArrowRight />
            </button>
        </div>
    );
}
