import React from 'react';
import styles from './Logos.module.css';
import fb from './fb.png';
import ln from './ln.png';
import insta from './insta.png';

export default function Logos() {

    return (
        <div className={styles.container}>
            <a href=""><img className={styles.logoStyles} src={ln} alt="LinkedIn logo" /></a>
            <a href=""><img className={styles.logoStyles} src={insta} alt="Instagram logo" /></a>
            <a href=""><img className={styles.logoStyles} src={fb} alt="Facebook logo" /></a>
        </div>
    );

}