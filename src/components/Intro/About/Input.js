import React, { useState } from 'react';
import styles from './Input.module.css';
import { FaArrowRight } from 'react-icons/fa'; // Import the Font Awesome arrow icon

export default function Input({ email, validated, setIsValidated, handleEmailChange, disabled, setDisabled }) {

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
            handleEmailChange('Successfully Registered!');
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
                    className={`${styles.input} ${validated ? styles.greenInput : ''}`}
                    style={{ borderBottom: validated ? '2px solid green' : '', color: !disabled ? 'white' : 'greenyellow' }}
                    disabled={disabled}
                />
                {!validated && <FaArrowRight onClick={handleValidationClick} disabled={disabled} className={styles.greyArrow} />}
            </div>
            <label htmlFor="email-input">
                We're really honest guys and promise not to send you ads. We will write only once when our platform is ready.
            </label>
        </div>
    );
}
