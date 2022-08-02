import { useActions } from '../../../State/Hooks/team';
import styles from './TeamCard.css';

export default function TeamCard({ team }) {
    const { remove } = useActions();

    const handleRemove = () => remove(team.teamId);

    return (
        <div className={styles.TeamCard} 
            style={{ backgroundColor: team.primary, color: team.secondary }}>
            
            <h2>{team.fullName}</h2>
            {team.teamId < 1000000 && <button onClick={handleRemove}>❌</button>}
        </div>
    );
}

{/* {team.players.map((player, i) => (
    <span key={i} className={styles.PlayerPill}>
        <p>{`#${player.jersey}`}</p>
        <p>{`${player.firstName} ${player.lastName}`}</p>
        <p>{player.pos}</p> 
    </span>
))} */}

