import React from 'react';
import Input from './Input';
import styles from './About.module.css';
import D2DLogo from './D2DLogo.png';

export default function About({email, handleEmailChange, disabled, setDisabled}) {

    return (
        <>
        {/* <div className={styles.navbar}>
        <img className={styles.logo} src={D2DLogo} alt="D2D Logo" />
        <h1 className={styles.date}><span className={styles.days}>25 DAYS</span> TO LAUNCH</h1>
        </div> */}
        <div className={styles.container}>
            <h2 className={styles.heading1}>6 FREE MONTHS</h2>
            <h2 className={styles.heading2}>FOR OUR FIRST USERS</h2>
            <p>We'll launch all in one platform with a huge number of features that you will definitely like.</p>
            <p>And now you can become the very first user and get a god mode absolutely free.</p>
            <Input email={email} handleEmailChange={handleEmailChange} disabled={disabled} setDisabled={setDisabled} />
        </div>
        </>
    );

}