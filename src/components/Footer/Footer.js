import React from 'react';
import Input from '../Intro/About/Input';
import Logos from './Logos/Logos';
import styles from './Footer.module.css';

export default function Footer({email, validated, setIsValidated, handleEmailChange, disabled, setDisabled}) {
  return (
    <div className={styles.container}>
      <div className={styles.centeredContent}>
      <h2 className={styles.heading1}>6 FREE MONTHS</h2>
        <h2 className={styles.heading2}>FOR OUR FIRST USERS</h2>
        <div className={styles.input}>
        <Input validated={validated} setIsValidated={setIsValidated} email={email} handleEmailChange={handleEmailChange} disabled={disabled} setDisabled={setDisabled} />
        </div>
        <p className={styles.para}>WE ARE JUST STARTING OUR JOURNEY, <br /> BUT WE PROMISE THAT IT WILL BE COOL!</p>
        <Logos />
        <p className={styles.rights}>&#169; All Rights Reserved. YouthStory.in</p>
      </div>
    </div>
  );
}
