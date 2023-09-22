import React, {useState} from 'react';
import Intro from '../components/Intro/Intro';
import Info from '../components/Info/Info';
import Footer from '../components/Footer/Footer';
import styles from './LandingPage.module.css';

export default function LandingPage() {

    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(false);

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    return (
        <div className={styles.container}>
            <Intro email={email} handleEmailChange={handleEmailChange} disabled={disabled} setDisabled={setDisabled} />
            <br /><br /><br /><Info />
            <Footer email={email} handleEmailChange={handleEmailChange} disabled={disabled} setDisabled={setDisabled} />      
        </div>
    );

}