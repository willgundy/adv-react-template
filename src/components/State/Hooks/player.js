import { useContext, useEffect, useState } from 'react';
import { NBAContext, NBADispatchContext } from '../Context/NBAContext';
import { addPlayer, getAllPlayers, removePlayer, updatePlayer } from '../Services/Player-service';
import { showError, showSuccess } from '../Services/toaster';

export function usePlayers() {
    const [error, setError] = useState(null);
    const { players } = useContext(NBAContext);
    const { playersDispatch } = useContext(NBADispatchContext);

    useEffect(() => {
        if (players) return;
        //figure out ignore use case

        const fetchTeams = async () => {
            const { data, error } = await getAllPlayers();
            if (error) {
                setError(error);
            }
            if (data) {
                playersDispatch({ type: 'load', payload: data });
            }
        };

        fetchTeams();
    }, []);

    return { error, players };
}

export function usePlayerActions() {
    const { playersDispatch } = useContext(NBADispatchContext);

    const add = async (team) => {
        const { data, error } = await addPlayer(team);
        if (error) {
            showError(error.message);
        }
        if (data) {
            playersDispatch({ type: 'add', payload: data });
            showSuccess(`Added ${data.fullName} successfully`);
        }
    };

    const remove = async (id) => {
        const { data, error } = await removePlayer(id);
        if (error) {
            showError(error.message);
        }
        if (data) {
            playersDispatch({ type: 'remove', payload: data });
            showSuccess(`Removed ${data.fullName} successfully`);
        }
    };

    const update = async (player) => {
        const { data, error } = await updatePlayer(player);
        if (error) {
            showError(error.message);
        }
        if (data) {
            playersDispatch({ type: 'update', payload: data });
            showSuccess(`Updated ${data.fullName} successfully`);
        }
    };

    return { add, remove, update };
}
