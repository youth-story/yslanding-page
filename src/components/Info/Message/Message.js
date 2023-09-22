import React from 'react';
import styles from './Message.module.css';
import Button from './Button';

export default function Message({heading, message}) {

    return (
        <div className={styles.container}>
            <h2 className={styles.heading}>{heading}</h2>
            <p>{message}</p>
        </div>
    );

}