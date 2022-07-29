import {  InputControl } from '../Form/FormControls/FormControls.jsx';
import Button from '../Basic/Button/Button';
import styles from './List.css';

export default function SearchBar() {
    return (
        <form >
            <div className={styles.Filters}>
                <InputControl
                    name="pokemon"
                    placeholder="Search by Pokemon Name"
                    label="name"
                />
                <InputControl
                    label="type"
                    name="type"
                />
            </div>
            <Button text={'Search Pokedex'}/>
        </form>
    );
}
