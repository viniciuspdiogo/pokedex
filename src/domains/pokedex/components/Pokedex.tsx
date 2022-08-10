import React, {useEffect, useState } from 'react';
import { listPokemons, ListPokemonsInterface } from '../../pokemon/services/listPokemons';
import { useNavigate  } from "react-router-dom";
import { PokemonDetail } from '../../pokemon/interfaces/pokemonDetail';
import { formattId} from '../services/formattId';
import imgPokebola from '../../../assets/pokebola.png';

interface PokedexProps {
    
}

export const Pokedex: React.FC<PokedexProps> = () => {
    const navigate = useNavigate();
    const [pokemons,setPokemons] = useState<PokemonDetail[]>([]);
    const [previous,setPrevious] = useState<string | null>('');
    const [next,setNext] = useState<string | null>('');

    useEffect(() => {
        let sessionSlug = sessionStorage.getItem('slug');
        if(sessionSlug){
            changePage(sessionSlug)
        }else{
            listPokemons().then(function (response){
                setTimeout(() => {
                    setPrevious(response.previous)
                    setNext(response.next)
                    setPokemons(response.results)
                }, 500);
            });
        }
        
        
    }, []);    

    function handleClick(pokemon: PokemonDetail) {
        navigate(`/pokemon/${pokemon.name}`);
    }

    function changePage(link?: string | null){
        if(link?.length){
            setPokemons([]);
            window.scrollTo(0, 0);
            sessionStorage.setItem('slug',link);
            listPokemons(link).then(function (response){
                setTimeout(() => {
                    setPrevious(response.previous)
                    setNext(response.next)
                    setPokemons(response.results)
                }, 500);
            });
        }
    }
    
    return (
        <section className='container m-auto mt-5 p-2'>
            {pokemons.length ? 
            <div>
                <div className='w-full m-auto rounded bg-[#832900] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                    {pokemons.map((pokemon) => 
                        <div 
                            onClick={()=> handleClick(pokemon)} 
                            className={`${pokemon.types[0].type.name} flex rounded m-2 border pl-1 pr-1 pt-2 pb-2 hover:cursor-pointer card`}
                        >
                            <div className="flex flex-col justify-start w-[60%]">
                                <div className='m-1'>
                                    <span className='text-xs uppercase font-medium block'>
                                        #{formattId(pokemon.id)}
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
                            <div className='w-[40%] flex justify-center items-center'>
                                {   
                                    pokemon.sprites.other?.dream_world.front_default  
                                    ? <img className='max-h-24' src={pokemon.sprites.other?.dream_world.front_default} alt={pokemon.name} title={pokemon.name}/>
                                    : pokemon.sprites.front_default ?
                                    <img className='max-h-24' src={pokemon.sprites.front_default} alt={pokemon.name} title={pokemon.name} />
                                    : <img src="/public/pokebola.png" alt={pokemon.name} title="Imagem não disponível" />
                                    
                                }
                            </div>
                        </div>
                    )}
                </div>
                <div className='m-5 flex flex-1 gap-2 justify-center items-center'>
                    {previous?.length ? 
                        <button
                            onClick={() => changePage(previous)}
                            className='bg-[#e6ac5a] p-2 text-zinc-100 rounded font-medium uppercase text-sm transition-all hover:bg-[#cd7b29]  hover:transition-all'>
                            Anterior
                        </button>
                        :
                        <button
                            className='bg-[#e6ac5a] cursor-not-allowed opacity-30 p-2 text-zinc-100 rounded font-medium uppercase text-sm'>
                            Anterior
                        </button>
                    }
                        <span> / </span>

                    {next?.length 
                        ? 
                            <button 
                                onClick={() => changePage(next)}
                                className='bg-[#e6ac5a] p-2 text-zinc-100 rounded font-medium uppercase text-sm transition-all hover:bg-[#cd7b29]  hover:transition-all'>
                                Próximo
                            </button>
                        :
                            <button 
                                className='bg-[#e6ac5a] cursor-not-allowed opacity-30 p-2 text-zinc-100 rounded font-medium uppercase text-sm'>
                                Próximo
                            </button>
                    }
                    
                </div>  
            </div>  
            
            :
                <div className='m-auto w-full h-screen gap-5 flex flex-col justify-center items-center'>
                    <span className='text-white font-medium text-2xl'>
                        Carregando Pokemons...
                    </span>
                    <img
                        className='h-[60px] w-auto animate-spin' 
                        src={imgPokebola} alt="" 
                    />
                </div>
            }
        </section>
    );
}; 