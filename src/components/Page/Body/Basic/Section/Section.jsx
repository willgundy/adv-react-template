import styles from './Section.css';

export default function Section({ header, subText, width, height, children }) {
  return (
    <section className={styles.Section} style={{ minWidth: width, height }}>
      {header && <h1>{header}</h1>}
      {subText && <h4>{subText}</h4>}
      {children}
    </section>
  );
}
