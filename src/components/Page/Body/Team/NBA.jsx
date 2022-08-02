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
            <p>Double click on name to edit. Can only delete created teams because of a dependency, working on fixing.</p>
            <header className={styles.Header}>
                <Navigation navigation={navigation} />
            </header>
            <Outlet></Outlet>
        </Section>
    );
}
