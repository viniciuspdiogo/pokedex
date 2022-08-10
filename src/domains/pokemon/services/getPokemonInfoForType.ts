import axios from 'axios';
import { PokemonTypeDetails } from "../interfaces/pokemonTypeDetails";

export async function getPokemonInfoForType(name?: string): Promise<PokemonTypeDetails>{
    
    const endPoint = `${import.meta.env.VITE_POKEAPIURL}/type/${name}`;
    
    const response = await axios.get<PokemonTypeDetails>(endPoint);

    return response.data;
}