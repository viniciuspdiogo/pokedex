import React, { useState,useEffect } from 'react';
import { PokemonDetail } from '../interfaces/pokemonDetail';
import { getPokemonsDetails } from '../services/getPokemonDetails';
import { useParams } from "react-router-dom";
import { formattId } from '../../pokedex/services/formattId';
import { getPokemonInfoForType } from '../services/getPokemonInfoForType';
import { PokemonTypeDetails } from '../interfaces/pokemonTypeDetails';
import { formattWeightAndHeight } from '../services/formattWeightAndHeight';

interface PokemonDetailsProps {

}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    
    let { name } = useParams();
    const [selectedPokemonDetails, setselectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);
    const [pokemonInfoType,setPokemonInfoType] = useState<PokemonTypeDetails | undefined>(undefined);
    
    useEffect(() => {
        if (!name) return;

        getPokemonsDetails(name).then(function(response){

            setselectedPokemonDetails(response);
        })

    }, []);

    useEffect(() => {

        let type = selectedPokemonDetails?.types[0].type.name;
        if(type){
            getPokemonInfoForType(type).then(function(response){
                setPokemonInfoType(response);
            });
        }

    }, [selectedPokemonDetails]);
    console.log(selectedPokemonDetails?.stats);

    return (
            <section className='container m-auto mt-5 p-2'>
                <div className='bg-white w-full m-auto rounded p-2 lg:max-w-5xl'>
                    <div className={`dark-${selectedPokemonDetails?.types[0].type.name} w-full rounded-lg`}>
                            <div className='w-full p-5 text-center'>
                                <h1 className='text-4xl uppercase font-bold text-white mb-5'>
                                    {selectedPokemonDetails?.name}
                                </h1>
                                <span className='bg-[rgb(255,255,255,0.3)] rounded p-1 text-base font-bold text-white'>
                                    #{formattId(selectedPokemonDetails?.id)}
                                </span>
                            </div>
                                {
                                    selectedPokemonDetails?.sprites.other?.dream_world.front_default ?
                                        
                                        <div className='h-[150px] flex justify-center'> 
                                            <img 
                                                className='absolute h-[300px] p-2 m-auto '
                                                src={selectedPokemonDetails?.sprites.other?.dream_world.front_default} 
                                                alt={name} 
                                                title={"Pokemon: "+name}
                                            />
                                        </div>

                                    : selectedPokemonDetails?.sprites.front_default ?
                                        
                                        <div className='h-[75px] flex justify-center'> 
                                            <img 
                                                className='absolute h-[150px] m-auto '
                                                src={selectedPokemonDetails?.sprites.front_default} 
                                                alt={name} 
                                                title={"Pokemon: "+name}
                                            /> 
                                        </div>

                                    :   
                                        <div className='h-[75px] flex justify-center'> 
                                            <img 
                                                src="/public/pokebola.png" 
                                                alt="Imagem não disponível" 
                                                title="Imagem não disponível"
                                            />
                                        </div>
                                    }   
                        </div>
                        
                        <div 
                            className= 
                            {`   py-2
                                    ${selectedPokemonDetails?.sprites.other?.dream_world.front_default ?
                                        'mt-[160px]'
                                    :
                                        'mt-[75px]'
                                    }
                                `}
                            >
                                <div className='flex justify-center mb-5'>
                                        {selectedPokemonDetails?.types.map((type) => 
                                            <span className={`dark-${type.type.name} rounded-full py-3 px-5 font-medium text-lg m-2 text-white` }>
                                                {type.type.name}
                                            </span>
                                        )}
                                </div>
                                <div className='flex justify-center mb-5 gap-5'>
                                        <div className='flex justify-center items-center bg-cyan-300 rounded px-6 py-1'>
                                            <span className='m-2 text-sm font-medium '>
                                                {formattWeightAndHeight(selectedPokemonDetails?.height)} m
                                            </span>
                                        </div>
                                        <div className='flex justify-center items-center bg-emerald-300 rounded px-6 py-1'>
                                            <span className='m-2 text-sm font-medium '>
                                                {formattWeightAndHeight(selectedPokemonDetails?.weight)} Kg
                                            </span>
                                        </div>
                                </div>
                                    <div className=' block bg-gray-200 p-2 gap-2 rounded-lg md:flex md:flex-wrap md:flex-1'>
                                        <div className='flex flex-1 flex-col gap-2 mb-2'>
                                            <div className='p-2 text-center bg-yellow-500 rounded-lg'>
                                                <span className='text-base font-bold text-white'>
                                                    HABILIDADES
                                                </span>
                                            </div>
                                            <div className='flex flex-wrap gap-2'>
                                                {selectedPokemonDetails?.abilities.map((ability) =>
                                                    <span className=' bg-purple-500 p-2 rounded font-medium text-sm text-white'> 
                                                        {ability.ability.name}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        <div className='flex flex-1 flex-col gap-2 mb-2'>
                                            <div className='p-2 text-center bg-emerald-500 rounded-lg'>
                                                <span className='text-base font-bold text-white'>
                                                    VANTAGENS
                                                </span>
                                            </div>
                                            <div className='flex flex-wrap gap-2'>
                                                {pokemonInfoType?.damage_relations.double_damage_to.map((damage_to) =>
                                                    <span className={`dark-${damage_to.name} p-2 rounded font-medium text-sm text-white`}>{damage_to.name}</span>    
                                                )}
                                            </div>
                                            <div className='p-2 text-center bg-red-500 rounded-lg'>
                                                <span className='text-base font-bold text-white'>
                                                    DESVANTAGENS
                                                </span>
                                            </div>
                                            <div className='flex flex-wrap gap-2'>
                                                {pokemonInfoType?.damage_relations.double_damage_from.map((double_damage) =>
                                                    <span className={`dark-${double_damage.name} p-2 rounded font-medium text-sm text-white`}>{double_damage.name}</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className='flex flex-1 flex-col gap-2'>
                                            <div className='p-2 text-center bg-cyan-500 rounded-lg'>
                                                <span className='text-base font-bold text-white'>
                                                    ESTATÍSTICAS
                                                </span>
                                            </div>
                                            <div className='p-2 '>

                                                {
                                                    selectedPokemonDetails?.stats.map((stat) =>
                                                        <div>
                                                            <div className='flex justify-between'>
                                                                <span>{stat.stat.name}</span>
                                                                <span>{stat.base_stat} / 300</span>
                                                            </div>
                                                            <progress 
                                                                className={`${stat.stat.name}`}
                                                                max='300' 
                                                                value={stat.base_stat}
                                                            >
                                                                {stat.base_stat}
                                                            </progress>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                        </div>
                </div>
            </section>
    );
};
