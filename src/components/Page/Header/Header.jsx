import styles from './Header.css';
import Menu from './Menu';
import Navigation from './Navigation';
import User from './User';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <Menu />
      </div>

      <h1>My React App</h1>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>

      <User username={'Will'}/>
    </header>
  );
}
