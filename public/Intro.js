import React from 'react';
import SocialMedia from '../src/components/Intro/SocialMedia/SocialMedia';
import About from '../src/components/Intro/About/About';
import Image from '../src/components/Intro/Image/Image';
import styles from './Intro.module.css';

export default function Intro({email, handleEmailChange, disabled, setDisabled}) {

    return (
        <div className={styles.container}>
            <SocialMedia />
            <About email={email} handleEmailChange={handleEmailChange} disabled={disabled} setDisabled={setDisabled} />
            <Image />
        </div>
    );

}