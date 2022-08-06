import React, {useEffect, useState } from 'react';
import { listPokemons, PokemonInterface } from '../pokemon/services/listPokemons';
import { Link, useNavigate  } from "react-router-dom";
import { PokemonDetail } from '../pokemon/interfaces/pokemonDetail';

interface PokedexProps {
    
}

export const Pokedex: React.FC<PokedexProps> = () => {
    const navigate = useNavigate();
    const [pokemons,setPokemons] = useState<PokemonDetail[]>([]);


    useEffect(() => {
    
        listPokemons().then((response) => setPokemons(response.results));
       
    }, []);    

    function handleClick(pokemon: PokemonDetail) {
        navigate(`/pokemon/${pokemon.name}`);
    }

    return (
        <div className='flex flex-wrap'>
            {pokemons.map((pokemon) => 
                <div onClick={()=> handleClick(pokemon)}>
                    <img className="w-[100px] h-[100px]" src={pokemon.sprites.other?.dream_world.front_default} alt="" />
                    <span
                        className='text-2xl uppercase font-medium'
                    >
                        {pokemon.name}
                    </span>
                    
                   
                </div>
            )}
        </div>
    );
}; 