import React from 'react';
import axios from 'axios';
import { PokemonDetail } from '../interfaces/pokemonDetail';

export async function getPokemonsDetails(name: string): Promise<PokemonDetail>{
    
    const endPoint = `${import.meta.env.VITE_POKEAPIURL}/pokemon/${name}`;

    const response = await axios.get<PokemonDetail>(endPoint);

    return response.data;
}