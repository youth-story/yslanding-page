import React, { useState, useRef, useEffect } from 'react';
import Intro from '../components/Intro/Intro';
import Info from '../components/Info/Info';
import Footer from '../components/Footer/Footer';
import styles from './LandingPage.module.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase';

export default function LandingPage() {
    const scroll = useRef(null);
    const [email, setEmail] = useState('');
    const [disabled, setDisabled] = useState(false);
    const [validated, setIsValidated] = useState(false);
    const [googleMapsLink, setGoogleMapsLink] = useState('');
    const [userLocation, setUserLocation] = useState({});

    const handleEmailChange = (value) => {
        setEmail(value);
    };

    useEffect(() => {
        // Get the user's location here using Geolocation API
        if (validated && email !== 'Successfully Registered!' && "geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;

                // Now you have the user's coordinates
                setUserLocation({ latitude, longitude });

                // Create a Google Maps link with the stored coordinates
                if (latitude && longitude) {
                    const mapsLink = `https://www.google.com/maps?q=${latitude},${longitude}`;
                    setGoogleMapsLink(mapsLink);

                    // Perform the asynchronous operation (adding a document to Firestore) with coordinates and the Google Maps link
                    addDoc(collection(db, "d2d"), {
                        email: email,
                        coordinates: { latitude, longitude },
                        googleMapsLink: mapsLink,
                    })
                    .then((docRef) => {
                        // Handle success (you can log or provide user feedback)
                        // console.log("Email document added to Firestore:", docRef.id);
                        handleEmailChange('Successfully Registered!');
                    })
                    .catch((error) => {
                        // Handle errors gracefully, provide feedback to the user, and log for debugging
                        // console.error("Error adding email document to Firestore:", error);
                        alert("Error in registering, please try again");
                    });
                }
            }, function (error) {
                return;
            });
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
