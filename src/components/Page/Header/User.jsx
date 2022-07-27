import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './User.css';

// eslint-disable-next-line react/prop-types
export default function User({ username }) {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line react/prop-types
  const [initial] = useState(username.substring(0, 1));

  const className = classNames(styles.User, {
    [styles.Open]: isOpen,
  });

  const handleClick = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <div className={className}>
      <div onClick={handleClick} className={styles.UserIcon}>
        <div className={styles.ProfileImage}>{initial}</div>
        {username}
      </div>
      <div className={styles.UserMenu}>
        <Link 
          className={styles.UserMenuItem} 
          to="about" 
          onClick={handleClick}>
            Profile
        </Link>
        <Link 
          className={styles.UserMenuItem} 
          to="about" 
          onClick={handleClick}>
            Sign Out
        </Link>
      </div>
    </div>
  );
}
