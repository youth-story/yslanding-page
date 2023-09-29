import React from 'react';
import SocialMedia from './SocialMedia/SocialMedia';
import About from './About/About';
import Image from './Image/Image';
import Header from './Header/Header';
import styles from './Intro.module.css';

export default function Intro({email,validated, setIsValidated, handleEmailChange, disabled, setDisabled, scroller}) {

    return (
        <>
            <Header scroller={scroller} />
            <div className={styles.container}>
                    <SocialMedia />
                    <About validated={validated} setIsValidated={setIsValidated} email={email} handleEmailChange={handleEmailChange} disabled={disabled} setDisabled={setDisabled} />
                    <Image />
            </div>
        </>
    );

}
