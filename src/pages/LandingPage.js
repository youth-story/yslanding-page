import React, { useState, useRef } from 'react';
import Intro from '../components/Intro/Intro';
import Info from '../components/Info/Info';
import Footer from '../components/Footer/Footer';
import styles from './LandingPage.module.css';

export default function LandingPage() {

    const scroll = useRef(null);
    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [validated, setIsValidated] = useState(false);

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    const scrollToInfo = () => {
        scroll.current.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <div className={styles.container}>
            <Intro email={email} scroller={scrollToInfo} handleEmailChange={handleEmailChange} disabled={disabled} setDisabled={setDisabled} validated={validated} setIsValidated={setIsValidated} />
            <br /><br /><br /><div ref={scroll}><Info /></div>
            <Footer email={email} handleEmailChange={handleEmailChange} disabled={disabled} setDisabled={setDisabled} validated={validated} setIsValidated={setIsValidated} />      
        </div>
    );

}