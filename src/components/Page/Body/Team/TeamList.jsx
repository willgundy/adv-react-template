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
                <Card header={team.fullName} key={team.teamId} backgroundColor={team.primary} textColor={team.secondary} />
            ))}
        </ul>
    );
}
