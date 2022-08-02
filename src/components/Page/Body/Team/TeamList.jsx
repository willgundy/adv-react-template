import { useTeams } from '../../../State/Hooks/team';
import Card from '../Basic/Card/Card';
import styles from './TeamList.css';

export default function TeamList() {
    const { teams } = useTeams();

    if (!teams) {
        return null;
    }

    return (
        <ul className={styles.TeamList}>
            {teams.map(team => (
                <Card header={team.fullName} value={team.teamId} key={team.teamId} backgroundColor={team.primary} textColor={team.secondary}>
                    {/* {team.players.map((player, i) => (
                        <span key={i} className={styles.PlayerPill}>
                            <p>{`#${player.jersey}`}</p>
                            <p>{`${player.firstName} ${player.lastName}`}</p>
                            <p>{player.pos}</p> 
                        </span>
                    ))} */}
                </Card>
            ))}
        </ul>
    );
}
