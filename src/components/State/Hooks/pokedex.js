import { useEffect, useState } from 'react';
import { getPokedex, getPokemonTypes } from '../Services/pokedex-service';

export function pokedex(searchParams) {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [count, setCount] = useState(0);

    const fetchPokedex = async () => {
        const res = await getPokedex(searchParams);

        if (res.data) {
            setData(res.data.results);
            setCount(res.data.count);
            setError(null);
        }

        if (res.error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchPokedex();
    }, [searchParams]);

    return { error, data, count };
}

export function useTypes() {
    const [error, setError] = useState(null);
    const [types, setTypes] = useState(null);

    const fetchTypes = async () => {
        const res = await getPokemonTypes();

        if (res.data) {
            setTypes(res.data);
            setError(null);
        }

        if (res.error) {
            setError(error);
        }
    };

    useEffect(() => {
        fetchTypes();
    }, []);

    return { error, types };
}