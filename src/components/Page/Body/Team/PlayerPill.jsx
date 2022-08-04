import styles from './PlayerPill.css';

export default function PlayerPill({ player }) {

    return (
        <span className={styles.PlayerPill}>
            <p>{`#${player.jersey}`}</p>
            <p className={styles.PlayerName}>{`${player.firstName} ${player.lastName}`}</p>
            <p>{player.pos}</p>
            <span>✏️</span>
            <span>ⓧ</span>
        </span>
    );
}
