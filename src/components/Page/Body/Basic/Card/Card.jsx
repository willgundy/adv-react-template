import styles from './Card.css';

export default function Card({ image, header, children }) {
    return (
        <div className={styles.Card}>
            <img src={image} alt={header}/>
            <h2 className={styles.Header}>{header}</h2>
            {children}
        </div>
    );
}
