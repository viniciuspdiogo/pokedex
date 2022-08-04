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
    const [selectedPokemonDetails, setselectedPokemonDetails] = useState<any | undefined>(undefined);
    
    console.log(pokemons);
    
    useEffect(() => {
       

        axios.get('https://pokeapi.co/api/v2/pokemon/')
        .then((response) => setPokemons(response.data.results));
       
    }, []);

    useEffect(() => {
        if(!selectedPokemon) return;

        axios.get(`https://pokeapi.co/api/v2/pokemon/${selectedPokemon?.name}`)
        .then((response) => setselectedPokemonDetails(response.data));

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

            {JSON.stringify(selectedPokemonDetails,undefined,2)}
        </div>
    );
}; 