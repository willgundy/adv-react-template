import styles from './Section.css';

export default function Section({ header, subText, maxWidth, height, children }) {
  return (
    <section className={styles.Section} style={{ maxWidth, height }}>
      {header && <h1>{header}</h1>}
      {subText && <h4>{subText}</h4>}
      {children}
    </section>
  );
}
