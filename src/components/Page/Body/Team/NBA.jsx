import { Outlet } from 'react-router-dom';
import Navigation from '../../Header/Navigation';
import Section from '../Basic/Section/Section';
import styles from './NBA.css';

const navigation = [
    { to: '', label: 'Teams' }
];

export default function NBA() {
    return (
        <Section className={styles.NBA}>
            <header className={styles.Header}>
                <Navigation navigation={navigation} />
            </header>
            <Outlet></Outlet>
        </Section>
    );
}
