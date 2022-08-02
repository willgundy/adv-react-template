import { createContext, useReducer } from 'react';

export const TeamContext = createContext();

function reducer(teams, { type, payload }) {
    switch (type) {
        case 'load':
            return payload;
        case 'add':
            return [...teams, payload];
        case 'remove':
            return teams.filter(team => team.teamId !== payload.teamId);
        case 'update':
            return teams.map((team) => (team.teamId === payload.teamId ? payload : team));
        default:
            throw Error(`Unknown action: ${type}`);
    }
}

export default function TeamContextProvider({ children }) {
    const [teams, dispatch] = useReducer(reducer, null);
    return (
        <TeamContext.Provider value={{ teams, dispatch }}>
            {children}
        </TeamContext.Provider>
    );
}
