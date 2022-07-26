import { Link } from 'react-router-dom';
import styles from './Header.css';
import Navigation from './Navigation';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.MenuContainer}>
        <button>test</button>
      </div>

      <h1>My App</h1>

      <div className={styles.NavigationContainer}>
        <Navigation />
      </div>

      <div>User</div>
    </header>
  );
}
