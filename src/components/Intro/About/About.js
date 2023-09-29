import React from 'react';
import Input from './Input';
import styles from './About.module.css';
import mob_screen from './mob_screen.png';

export default function About({email, validated, setIsValidated, handleEmailChange, disabled, setDisabled}) {

    return (
        <>
        <div className={styles.container}>
            <h2 className={styles.heading1}>6 FREE MONTHS</h2>
            <h2 className={styles.heading2}>FOR OUR FIRST USERS</h2>
            <p>We'll launch all in one platform with a huge number of features that you will definitely like.</p>
            <p>And now you can become the very first user and get a god mode absolutely free.</p>
            <div className={styles.imgContainer}>
                <img className={styles.img} src={mob_screen} alt='Image' />
            </div>
            <Input validated={validated} setIsValidated={setIsValidated} email={email} handleEmailChange={handleEmailChange} disabled={disabled} setDisabled={setDisabled} />
        </div>
        </>
    );

}