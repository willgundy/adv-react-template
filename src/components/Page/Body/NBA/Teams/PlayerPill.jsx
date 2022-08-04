import { useRef, useState } from 'react';
import styles from './PlayerPill.css';

export default function PlayerPill({ player }) {
    const [dragging, setDragging] = useState(false);

    const dragPill = useRef();

    const handleDragStart = (e) => {
        setDragging(true);
        dragPill.current = e.target;
        dragPill.current.addEventListener('dragend', handleDragEnd);
        // console.log('drag start', player);
    };

    const handleDragEnd = () => {
        // console.log('drag end');
        setDragging(false);
        dragPill.current.removeEventListener('dragend', handleDragEnd);
        dragPill.current = dragging;
    };

    return (
        <span draggable 
            id={player.id}
            onDragStart={(e) => handleDragStart(e, player)}
            className={styles.PlayerPill}>
            <p>{`#${player.jersey}`}</p>
            <p className={styles.PlayerName}>{`${player.firstName} ${player.lastName}`}</p>
            <p>{player.pos}</p>
            <span>ⓧ</span>
        </span>
    );
}
