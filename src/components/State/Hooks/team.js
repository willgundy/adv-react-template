import { useContext, useEffect, useState } from 'react';
import { TeamContext } from '../Context/TeamContext';
import { addTeam, getTeamsWithPlayers, removeTeam, updateTeam } from '../Services/Team-service';
import { showError, showSuccess } from '../Services/toaster';

export function useTeams() {
    const [error, setError] = useState(null);
    //need to come back after adding team context
    const { teams, dispatch } = useContext(TeamContext);

    useEffect(() => {
        if (teams) return;
        //figure out ignore use case

        const fetchTeams = async () => {
            const { data, error } = await getTeamsWithPlayers();
            if (error) {
                setError(error);
            }
            if (data) {
                dispatch({ type: 'load', payload: data });
            }
        };

        fetchTeams();
    }, []);

    return { error, teams };
}

export function useActions() {
    const { dispatch } = useContext(TeamContext);

    const add = async (team) => {
        const { data, error } = await addTeam(team);
        if (error) {
            showError(error.message);
        }
        if (data) {
            dispatch({ type: 'add', payload: data });
            showSuccess(`Added ${data.fullName} successfully`);
        }
    };

    const remove = async (id) => {
        const { data, error } = await removeTeam(id);
        if (error) {
            showError(error.message);
        }
        if (data) {
            dispatch({ type: 'remove', payload: data });
            showSuccess(`Removed ${data.fullName} successfully`);
        }
    };

    const update = async (team) => {
        const { data, error } = await updateTeam(team);
        if (error) {
            showError(error.message);
        }
        if (data) {
            dispatch({ type: 'update', payload: data });
            showSuccess(`Updated ${data.fullName} successfully`);
        }
    };

    return { add, remove, update };
}
