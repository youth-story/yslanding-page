import React from 'react';
import styles from './Logos.module.css';
import fb from './fb.png';
import ln from './ln.png';
import insta from './insta.png';

export default function Logos() {

    return (
        <div className={styles.container}>
            <a href="https://www.linkedin.com/company/youthstory-india/"><img className={styles.logoStyles} src={ln} alt="LinkedIn logo" /></a>
            <a href="https://www.instagram.com/d2d.youthstory/"><img className={styles.logoStyles} src={insta} alt="Instagram logo" /></a>
            <a href="https://www.facebook.com/profile.php?id=100095239871969&mibextid=ZbWKwL"><img className={styles.logoStyles} src={fb} alt="Facebook logo" /></a>
        </div>
    );

}