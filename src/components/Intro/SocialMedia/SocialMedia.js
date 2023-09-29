import React from 'react';
import styles from './SocialMedia.module.css';
import fb from './fb.png';
import insta from './Insta.png';
import ln from './ln.png';
import yt from './yt.png';

export default function SocialMedia() {
    return (
        <div className={styles.container}>
            <a href="https://www.linkedin.com/company/youthstory-india/"><img className={styles.ln} src={ln} alt="LinkedIn logo" /></a>
            <a href="https://www.instagram.com/d2d.youthstory/"><img className={styles.insta} src={insta} alt="Instagram logo" /></a>
            <a href="https://www.facebook.com/profile.php?id=100095239871969&mibextid=ZbWKwL"><img className={styles.fb} src={fb} alt="Facebook logo" /></a>
            <a href="https://www.youtube.com/channel/UCnznH__UxN-2sQpyecwKfwQ"><img className={styles.yt} src={yt} alt="YouTube logo" /></a>
        </div>
    );
}
