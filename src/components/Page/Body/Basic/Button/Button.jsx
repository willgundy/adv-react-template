import styles from './Button.css';

export default function Button({ text, width, height, onClick }) {
    return (
        <button className={styles.Button} style={{ width, height }} onClick={onClick}>
            {text}
        </button>
    );
}
