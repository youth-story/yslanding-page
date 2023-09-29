import React, { useState, useRef, useEffect } from 'react';
import Intro from '../components/Intro/Intro';
import Info from '../components/Info/Info';
import Footer from '../components/Footer/Footer';
import styles from './LandingPage.module.css';
import { collection, addDoc } from "firebase/firestore";
import {db} from './firebase';

export default function LandingPage() {

    const scroll = useRef(null);
    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [validated, setIsValidated] = useState(false);

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    useEffect(() => {
        if (validated && email != 'Successfully Registered!') {
            // Perform the asynchronous operation (adding a document to Firestore)
            addDoc(collection(db, "d2d"), {
                email: email,
            })
            .then((docRef) => {
                // Handle success (you can log or provide user feedback)
                // console.log("Email document added to Firestore:", docRef.id);
            })
            .catch((error) => {
                // Handle errors gracefully, provide feedback to the user, and log for debugging
                // console.error("Error adding email document to Firestore:", error);
                alert("Error in registering, please try again");
            });

            handleEmailChange('Successfully Registered!');

        }        
    }, [validated, email]);

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