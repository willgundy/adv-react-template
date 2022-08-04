import { createContext, useReducer } from 'react';

export const PlayerContext = createContext();

function reducer(players, { type, payload }) {
    switch (type) {
        case 'load':
            return payload;
        case 'add':
            return [...players, payload];
        case 'remove':
            return players.filter(player => player.personId !== payload.personId);
        case 'update':
            return players.map((player) => (player.personId === payload.personId ? payload : player));
        default:
            throw Error(`Unknown action: ${type}`);
    }
}

export default function PlayerContextProvider({ children }) {
    const [players, dispatch] = useReducer(reducer, null);
    return (
        <PlayerContext.Provider value={{ players, dispatch }}>
            {children}
        </PlayerContext.Provider>
    );
}
