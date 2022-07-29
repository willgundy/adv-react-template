import styles from './Card.css';

export default function Card({ image, header, subText }) {
  return (
    <div className={styles.Card}>
      <img src={image} alt={header}/>
      <h2 className={styles.Header}>{header}</h2>
      <div className={styles.SubText}>
        <span className={styles.SubText}> {subText} </span>
      </div>
    </div>
  );
}
