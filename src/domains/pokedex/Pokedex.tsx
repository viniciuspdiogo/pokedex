import React, {useEffect, useState } from 'react';
import axios from 'axios';
interface PokedexProps {
    
}

interface PokemonListInterface {
    name: string,
    url: string,
}

export const Pokedex: React.FC<PokedexProps> = () => {
    const [pokemons,setPokemons] = useState<PokemonListInterface[]>([]);
    const [selectedPokemon, setselectedPokemon] = useState<PokemonListInterface | undefined>(undefined);
    

    useEffect(() => {

        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => setPokemons(response.data.results));
       
    }, []);

    useEffect(() => {
        console.log(selectedPokemon?.name);
    }, [selectedPokemon]);


    return (
        <div>
            Olá Mundo
            {pokemons.map((pokemon) => 
                <div>
                        <button className=' uppercase border-0 m-1 p-2 inline-block bg-gray-700 text-gray-100 font-medium' 
                        onClick={() => setselectedPokemon(pokemon)}>{pokemon.name}
                        </button>
                    <br/>
                </div>
            )}
        </div>
    );
}; 