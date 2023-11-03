import styles from './Button.module.css';

export default function Button({ text, color }) {
    const buttonStyle = {
        backgroundColor: color, // Use the passed color as the background color
    };

    return (
        <div className={styles.btn} style={buttonStyle}>
            {text}
        </div>
    );
}
