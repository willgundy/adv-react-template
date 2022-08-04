import { useState } from 'react';
import { useActions } from '../../../State/Hooks/team';
import { InputControl } from '../Form/FormControls/FormControls';
import PlayerPill from './PlayerPill';
import styles from './TeamCard.css';

export default function TeamCard({ team }) {
    const { remove, update } = useActions();
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(team.fullName);

    const handleRemove = () => remove(team.teamId);

    const handleDoubleClick = () => {
        setEditing(true);
    };
    
    const handleChange = (e) => {
        setName(e.target.value);
    };
    
    const handleEdit = async () => {
        setEditing(false);
        if (name === team.fullName) return;
        await update({ fullName: name, teamId: team.teamId });
    };
    
    const handleKeyDown = (e) => {
        if (e.code === 'Enter') handleEdit();
    };

    return (
        <div className={styles.TeamCard} 
            style={{ backgroundColor: team.primary, color: team.secondary }}>
            {/* only want to allow user created teams to be deleted */}
            <div>
                {team.teamId < 1000000 && <button onClick={handleRemove}>ⓧ</button>}
                {editing ? (
                    <InputControl
                        name="name"
                        value={name}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        onBlur={handleEdit}
                    />
                ) : (
                    <h2 onDoubleClick={handleDoubleClick}>{team.fullName}</h2>
                )}
            </div>
            <div className={styles.PlayerContainer}>
                {team.players && team.players.map((player, i) => (
                    <PlayerPill player={player} key={i} />
                ))}
            </div>
        </div>
    );
}

