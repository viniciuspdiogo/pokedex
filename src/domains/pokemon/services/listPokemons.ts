import axios from 'axios';
import { PokemonDetail } from '../interfaces/pokemonDetail';
import { getPokemonsDetails } from './getPokemonDetails';

export interface PokemonInterface {
    name: string;
    url: string;
}


export interface ListPokemonsInterface {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonDetail[];
}

export async function listPokemons(link?: string | null): Promise<ListPokemonsInterface>{
    
    link = link ? link : `${import.meta.env.VITE_POKEAPIURL}/pokemon/?offset=0&limit=50`;
    const endPoint = link;

    const response = await axios.get<ListPokemonsInterface>(endPoint);
    
    const promisseArr = response.data.results.map(
        ({name}) => getPokemonsDetails(name)
    );
    const resultsPromise = await Promise.all(promisseArr);

    return {
        ...response.data,
        results: resultsPromise
    };
}