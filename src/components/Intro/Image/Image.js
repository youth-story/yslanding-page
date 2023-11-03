import React from 'react';
import styles from './Image.module.css';
import laptop from './laptop.png';

export default function Image() {

    return (
        <div className={styles.container}>
            <img className={styles.image} src={laptop} alt='image' />
        </div>
    );

}