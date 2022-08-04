import { useContext, useEffect, useState } from 'react';
import { PlayerContext } from '../Context/PlayerContext';
import { addPlayer, getAllPlayers, removePlayer, updatePlayer } from '../Services/Player-service';
import { showError, showSuccess } from '../Services/toaster';

export function usePlayers() {
    const [error, setError] = useState(null);
    //need to come back after adding team context
    const { players, dispatch } = useContext(PlayerContext);

    useEffect(() => {
        if (players) return;
        //figure out ignore use case

        const fetchPlayers = async () => {
            const { data, error } = await getAllPlayers();
            if (error) {
                setError(error);
            }
            if (data) {
                dispatch({ type: 'load', payload: data });
            }
        };

        fetchPlayers();
    }, []);

    return { error, players };
}

export function useActions() {
    const { dispatch } = useContext(PlayerContext);

    const add = async (player) => {
        const { data, error } = await addPlayer(player);
        if (error) {
            showError(error.message);
        }
        if (data) {
            dispatch({ type: 'add', payload: data });
            showSuccess(`Added ${data.firstName} ${data.lastName} successfully`);
        }
    };

    const remove = async (id) => {
        const { data, error } = await removePlayer(id);
        if (error) {
            showError(error.message);
        }
        if (data) {
            dispatch({ type: 'remove', payload: data });
            showSuccess(`Removed ${data.firstName} ${data.lastName} successfully`);
        }
    };

    const update = async (player) => {
        const { data, error } = await updatePlayer(player);
        if (error) {
            showError(error.message);
        }
        if (data) {
            dispatch({ type: 'update', payload: data });
            showSuccess(`Updated ${data.firstName} ${data.lastName} successfully`);
        }
    };

    return { add, remove, update };
}
