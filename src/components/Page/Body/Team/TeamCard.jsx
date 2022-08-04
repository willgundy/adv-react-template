import { useState } from 'react';
import { useActions } from '../../../State/Hooks/team';
import Button from '../Basic/Button/Button';
import { InputControl, SelectControl } from '../Form/FormControls/FormControls';
import PlayerPill from './PlayerPill';
import styles from './TeamCard.css';

export default function TeamCard({ team }) {
    const { remove, update } = useActions();
    const [editing, setEditing] = useState(false);
    const [name, setName] = useState(team.fullName);

    const handleRemove = () => remove(team.id);

    const handleDoubleClick = () => {
        setEditing(true);
    };
    
    const handleChange = (e) => {
        setName(e.target.value);
    };
    
    const handleEdit = async () => {
        setEditing(false);
        if (name === team.fullName) return;
        await update({ fullName: name, id: team.id });
    };
    
    const handleKeyDown = (e) => {
        if (e.code === 'Enter') handleEdit();
    };

    return (
        <div className={styles.TeamCard} 
            style={{ backgroundColor: team.primary, color: team.secondary }}>
            {/* only want to allow user created teams to be deleted */}
            <div>
                {team.id < 1000000 && <button onClick={handleRemove}>ⓧ</button>}
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
            <form className={styles.AddPlayer}>
                <InputControl 
                    type="number"
                    placeholder={0}
                    required/>
                <InputControl 
                    type="text"
                    placeholder="First Name"
                    required/>
                <InputControl 
                    type="text"
                    placeholder="Last Name"
                    required/>
                <SelectControl>
                    <option value="">Position</option>
                    <option value="G">G</option>
                    <option value="G-F">G-F</option>
                    <option value="F">F</option>
                    <option value="F-C">F-C</option>
                    <option value="C">C</option>
                </SelectControl>
                <Button text="+"/>
            </form>
        </div>
    );
}

