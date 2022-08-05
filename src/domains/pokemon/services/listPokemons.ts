import axios from 'axios';

export interface PokemonInterface {
    name: string;
    url: string;
}


interface ListPokemonsInterface {
    count: number;
    next: string | null;
    previus: string | null;
    results: PokemonInterface[];
   
}

export async function listPokemons(): Promise<ListPokemonsInterface>{
    
    const endPoint = `${import.meta.env.VITE_POKEAPIURL}/pokemon`;

    const response = await axios.get<ListPokemonsInterface>(endPoint);

    return response.data;
}