import pokedex from '../../../State/State/pokedex';
import Section from '../Basic/Section/Section';
import PokemonList from './PokemonList';
import SearchBar from './SearchBar';

export default function List() {
    const { data } = pokedex();

    if (!data) return null;

    return (
        <>
            <Section
                header="Pokedex"
                subText="A list of all the pokemon in the Pokedex"  
                maxWidth="90%">
                <SearchBar />
            </Section>
            <Section  
                maxWidth="90%" >
                <PokemonList pokemon={data}/>
            </Section>
        </>
    );
}
