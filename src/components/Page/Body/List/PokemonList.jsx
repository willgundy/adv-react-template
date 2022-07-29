import Card from '../Basic/Card/Card';
import styles from './List.css';

export default function PokemonList({ pokemon }) {
    return (
        <div className={styles.List}>
            {pokemon.map((pokemon) => (
                <Card key={pokemon._id} image={pokemon.url_image} header={pokemon.pokemon}>
                    {pokemon.type_1 !== 'NA' && <span>{pokemon.type_1}</span>}
                    {pokemon.type_2 !== 'NA' && <span>{pokemon.type_2}</span>}
                </Card>
            ))}
        </div>
    );
}
