import pokedex from '../../../State/State/pokedex';
import Section from '../Basic/Section/Section';
import Card from '../Basic/Card/Card';
import styles from './List.css';

export default function List() {
    const { data } = pokedex();
    console.log('pokedex', data);
    if (!data) return null;

    return (
        <Section header="Pokedex" 
            subText="List of all Pokemon" 
            maxWidth="90%" 
            height="100%" >
            <div className={styles.List}>
                {data.map((pokemon) => (
                    <Card key={pokemon._id} image={pokemon.url_image} header={pokemon.pokemon}>
                        <p>{pokemon.pokemon}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
