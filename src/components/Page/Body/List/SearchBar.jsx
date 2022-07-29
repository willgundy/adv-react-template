import {  InputControl } from '../Form/FormControls/FormControls.jsx';
import Button from '../Basic/Button/Button';
import styles from './List.css';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SearchBar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const pokemon = searchParams.get('pokemon') || '';
    const type = searchParams.get('type') || '';
  
    const [search, setSearch] = useState({ pokemon, type });
  
    useEffect(() => {
        setSearch({ pokemon, type });
    }, [pokemon, type]);
  
    const handleSubmit = (e) => {
        e.preventDefault();
        setSearchParams(search);
    };
  
    const handleChange = ({ target: { name, value } }) => {
        setSearch((search) => ({ ...search, [name]: value }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className={styles.Filters}>
                <InputControl
                    name="pokemon"
                    placeholder="Search by Pokemon Name"
                    label="pokemon"
                    value={search.pokemon}
                    onChange={handleChange}
                />
                <InputControl
                    label="type"
                    name="type"
                    value={search.type}
                    onChange={handleChange}
                />
            </div>
            <Button text={'Search Pokedex'}/>
        </form>
    );
}
