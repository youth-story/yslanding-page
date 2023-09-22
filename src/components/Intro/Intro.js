import React from 'react';
import SocialMedia from './SocialMedia/SocialMedia';
import About from './About/About';
import Image from './Image/Image';
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
