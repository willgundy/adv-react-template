import { useContext, useEffect, useState } from 'react';
import { TeamContext } from '../Context/TeamContext';
import { addTeam, getTeamsWithPlayers, removeTeam, updateTeam } from '../Services/Team-service';

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
            //to add in toasts later
        }
        if (data) {
            dispatch({ type: 'add', payload: data });
            //to add in toasts later
        }
    };

    const remove = async (id) => {
        const { data, error } = await removeTeam(id);
        if (error) {
            //to add in toasts later
        }
        if (data) {
            dispatch({ type: 'remove', payload: data });
            //to add in toasts later
        }
    };

    const update = async (team) => {
        const { data, error } = await updateTeam(team);
        if (error) {
            //to add in toasts later
        }
        if (data) {
            dispatch({ type: 'update', payload: data });
            //to add in toasts later
        }
    };

    return { add, remove, update };
}
