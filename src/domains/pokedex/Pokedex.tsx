import React, {useEffect, useState } from 'react';
import { listPokemons, PokemonInterface } from '../pokemon/services/listPokemons';
import { getPokemonsDetails } from '../pokemon/services/getPokemonDetails';
import { PokemonDetail } from '../pokemon/interfaces/pokemonDetail';
import { Link, Navigate } from 'react-router-dom';

interface PokedexProps {
    
}

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons,setPokemons] = useState<PokemonInterface[]>([]);
    const [selectedPokemon, setselectedPokemon] = useState<PokemonInterface | undefined>(undefined);
    const [selectedPokemonDetails, setselectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);


    useEffect(() => {
    
        listPokemons().then((response) => setPokemons(response.results));
       
    }, []);    

    return (
        <div>
            
            {pokemons.map((pokemon) => 
                <div>
                        <Link to='/pokemon'>
                            <button className=' uppercase border-0 m-1 p-2 inline-block bg-gray-700 text-gray-100 font-medium'>
                                {pokemon.name}
                            </button>
                        </Link>
                    <br/>
                </div>
            )}
        </div>
    );
}; 