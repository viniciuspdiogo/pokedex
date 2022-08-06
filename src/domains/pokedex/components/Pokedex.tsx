import React, {useEffect, useState } from 'react';
import { listPokemons } from '../../pokemon/services/listPokemons';
import { useNavigate  } from "react-router-dom";
import { PokemonDetail } from '../../pokemon/interfaces/pokemonDetail';
import { formattId} from '../services/formattId' 

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
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container m-auto'>
            {pokemons.map((pokemon) => 
                <div 
                    onClick={()=> handleClick(pokemon)} 
                    className={`${pokemon.types[0].type.name} flex rounded m-2 border pl-1 pr-1 pt-2 pb-2 hover:cursor-pointer card`}
                >
                    <div className="flex flex-col justify-start w-[60%]">
                        <div className='m-1'>
                            <span className='text-xs uppercase font-medium block'>
                                #{formattId(pokemon)}
                            </span>
                            <span className='text-base uppercase font-medium block'>
                                {pokemon.name}
                            </span>
                        </div>
                        <div>
                            {pokemon.types.map((type) => 
                                <span 
                                    className={`dark-${type.type.name} text-xs pl-2 pr-2 pt-1 pb-1 rounded-full inline-block m-1 tipo`}
                                >
                                    {type.type.name}
                                </span> 
                            )}
                        </div>
                    </div>
                    <div className='w-[40%] flex justify-center'>
                        <img className='max-h-24' src={pokemon.sprites.other?.dream_world.front_default} alt="" />
                    </div>
                </div>
            )}
        </div>
    );
}; 