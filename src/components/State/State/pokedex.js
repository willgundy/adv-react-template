import { useEffect, useState } from 'react';
import { getPokedex } from '../Services/pokedex-service';

export default function pokedex() {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [count, setCount] = useState(0);

    const fetchPokedex = async () => {
        const res = await getPokedex();

        console.log(res.data.results);

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
    }, []);

    return { error, data, count };
}
