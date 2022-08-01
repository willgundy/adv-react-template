import { Outlet } from 'react-router-dom';
import Navigation from '../../Header/Navigation';
import styles from './FuzzyBunny.css';

const navigation = [
    { to: '', label: 'Families' }
];

export default function FuzzyBunny() {
    return (
        <section className={styles.FuzzyBunny}>
            <header>
                <Navigation navigation={navigation} />
            </header>
            <Outlet>Default content</Outlet>
        </section>
    );
}
